const Discord = require("discord.js")
const bot = require("./bot.js")

const { botId, botSecret, userAgent, domain, port, cookieSecret } = require("./config.json")

const oauth = require("./util/oauth.js")
const pool = require("./util/setupDB.js")

const crypto = require("node:crypto")
const express = require("express")
const cookieParser = require("cookie-parser")

const app = express()
app.disable("x-powered-by")
app.use(express.json())
app.use(cookieParser(cookieSecret))
app.listen(port)

// - Dashboard -

app.get("/", (req, res) => {
	res.send({uptime: process.uptime()})
})

app.get("/servers", async (req, res) => {
	if (!req.signedCookies.token) return res.status(401).send("Missing token cookie")

	const servers = await oauth.getUserServers(req.signedCookies.token, pool)
	console.log(servers)

	const filtered = servers.filter(server => server.owner || Discord.PermissionsBitField(server.permissions).has("ManageGuild")).map(server => ({
		id: server.id,
		name: server.name,
		icon: server.icon
	}))
	res.send({servers: filtered})
})

app.get("/login", async (req, res) => {
	if (!req.query.code) return res.status(400).send("Missing code query parameter")

	const body = {
		client_id: botId,
		client_secret: botSecret,
		redirect_uri: "https://" + domain + "/dashboard",
		grant_type: "authorization_code",
		code: req.query.code
	}

	const formBody = []
	for (const property in body) formBody.push(encodeURIComponent(property) + "=" + encodeURIComponent(body[property]))

	const fetched = await fetch("https://discord.com/api/v10/oauth2/token", {
		method: "POST",
		body: formBody.join("&"),
		headers: {
			"User-Agent": userAgent,
			"Content-Type": "application/x-www-form-urlencoded",
			Accept: "application/json"
		}
	})
	const json = await fetched.json()
	console.log(json)

	const user = await oauth.getUser(json.access_token).catch(err => {
		console.log(err)
		res.status(500).send("Error getting user data")
	})
	if (user instanceof Error) return
	console.log(user)

	const token = oauth.generateToken()
	res.cookie("token", token, {signed: true, secure: true, httpOnly: true, expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7), domain: "." + domain.split(".").slice(-2).join(".")})

	pool.query(
		"INSERT INTO `user` (`id`, `token`, `access`, `refresh`, `expires`) VALUES (?, ?, ?, ?, ?) ON DUPLICATE KEY UPDATE `token` = ?, `access` = ?, `refresh` = ?, `expires` = ?",
		[user.id, token, json.access_token, json.refresh_token, Date.now() + json.expires_in * 1000, token, json.access_token, json.refresh_token, Date.now() + json.expires_in * 1000]
	)

	res.send({token})
})
app.get("/logout", (req, res) => {
	if (!req.signedCookies.token) return res.status(401).send("Missing token cookie")

	res.clearCookie("token", {domain: "." + domain.split(".").slice(-2).join(".")})
	res.send({success: true})

	pool.query("DELETE FROM `user` WHERE `token` = ?", [req.signedCookies.token])
})

// - Hooks -

const hookFunc = async (req, res) => {
	const [rows] = await pool.query("SELECT * FROM `hook` WHERE `id` = ?", [req.params.id])
	if (rows.length == 0) return res.sendStatus(404)

	const hook = rows[0]
	console.log(req.body)

	if (req.params.secret.startsWith("sha256=")) {
		const sha256 = crypto.createHmac("sha256", hook.secret)
		if (!crypto.timingSafeEqual(Buffer.from("sha256=" + sha256.update(JSON.stringify(req.body)).digest("hex")), Buffer.from(req.params.secret))) return res.status(401).send("Invalid secret as header")
	} else if (req.params.secret != hook.secret) return res.status(401).send("Invalid secret in URL")

	const githubEvent = req.headers["x-github-event"]
	if (hook.filterEvent && !hook.filterEvent.includes(githubEvent)) return res.status(202).send("Event " + githubEvent + " is disabled in settings for this hook")

	const data = req.body
	const action = data.action
	if (hook.filterAction && !hook.filterAction.includes(action)) return res.status(202).send("Action " + action + " is disabled in settings for this hook")

	let message = hook.message
	const recursiveFunc = (obj, path = "") => {
		for (const property in obj) {
			if (typeof obj[property] == "object") recursiveFunc(obj[property], path + property + ".")
			else message = message.replace(new RegExp("{" + path + property + "}", "gi"), obj[property])
		}
	}
	recursiveFunc(data)

	let parsed = {}
	try {
		parsed = JSON.parse(message)
	} catch (e) {
		return res.status(500).send("Invalid JSON in message")
	}

	if (hook.webhook) {
		const webhookClient = new Discord.WebhookClient(hook.webhook, hook.secret)
		await webhookClient.send(JSON.parse(message))
		res.sendStatus(204)
	} else {
		const channel = bot.channels.cache.get(hook.channel)
		if (channel) {
			await channel.send(JSON.parse(message))
			res.sendStatus(204)
		} else res.status(500).send("Unable to send message of hook " + hook.id + " because the channel " + hook.channel + " does not exist")
	}
}

app.post("/hook/:id/:secret", hookFunc)
app.post("/hook/:id", async (req, res) => {
	console.log(req.headers)
	if (!req.get("X-Hub-Signature-256")) return res.status(401).send("Missing X-Hub-Signature-256 header")

	req.params.secret = req.get("X-Hub-Signature-256")
	hookFunc(req, res)
})

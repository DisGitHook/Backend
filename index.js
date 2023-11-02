const Discord = require("discord.js")
const bot = require("./bot.js")

const { botId, botSecret, userAgent, domain, port, cookieSecret } = require("./config.json")

const encode = s => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;")

const oauth = require("./util/oauth.js")
const pool = require("./util/setupDB.js")

const crypto = require("node:crypto")
const express = require("express")
const cookieParser = require("cookie-parser")

const app = express()
app.disable("x-powered-by")
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser(cookieSecret))

const ratelimit30s = {}
const ratelimit5m = {}
let ratelimitGlobal5m = 0
app.use((req, res, next) => {
	const ip = req.headers["cf-connecting-ip"]
	if (!req.headers["cf-connecting-ip"]) return res.status(400).send("Direct access is not allowed")

	if (req.path.startsWith("/hook/")) return next()

	if (ratelimit30s[ip] && ratelimit30s[ip] >= 30) return res.status(429).send("Too many requests in the last 30 seconds")
	if (ratelimit5m[ip] && ratelimit5m[ip] >= 130) return res.status(429).send("Too many requests in the last 5 minutes")
	if (ratelimitGlobal5m >= 800) return res.status(429).send("Too many requests in the last 5 minutes")

	if (ratelimit30s[ip]) ratelimit30s[ip]++
	else ratelimit30s[ip] = 1

	if (ratelimit5m[ip]) ratelimit5m[ip]++
	else ratelimit5m[ip] = 1

	ratelimitGlobal5m++

	setTimeout(() => {
		ratelimit30s[ip]--
	}, 1000 * 30)
	setTimeout(() => {
		ratelimit5m[ip]--
		ratelimitGlobal5m--
	}, 1000 * 60 * 5)

	next()
})

app.listen(port)

// - Dashboard -

app.get("/", (req, res) => {
	res.send({uptime: process.uptime()})
})

app.get("/servers", async (req, res) => {
	if (!req.signedCookies.token) return res.status(401).send("Missing token cookie")

	const servers = await oauth.getUserServers(req.signedCookies.token, pool)
	console.log(servers)

	const filtered = servers.map(server => ({
		id: server.id,
		name: server.name,
		icon: server.icon
	}))
	res.send({servers: filtered})
})

app.get("/servers/:id/hooks", async (req, res) => {
	if (!req.signedCookies.token) return res.status(401).send("Missing token cookie")

	const servers = await oauth.getUserServers(req.signedCookies.token, pool)
	if (!servers) return res.status(401).send({success: false, error: "Invalid token cookie"})
	if (!servers.some(server => server.id == req.params.id)) return res.status(401).send({success: false, error: "Invalid server ID"})

	const [rows] = await pool.query("SELECT * FROM `hook` WHERE `server` = ?", [req.params.id])
	const hooks = rows.map(hook => ({
		id: hook.id,
		secret: hook.secret,
		name: hook.name,
		webhook: hook.webhook,
		channel: hook.channel,
		message: hook.message,
		filterEvent: hook.filterEvent,
		filterAction: hook.filterAction
	}))
	res.send({hooks})
})

app.post("/servers/:id/hooks", async (req, res) => {
	if (!req.signedCookies.token) return res.status(401).send({success: false, error: "Missing token cookie"})

	const servers = await oauth.getUserServers(req.signedCookies.token, pool)
	if (!servers) return res.status(401).send({success: false, error: "Invalid token cookie"})
	if (!servers.some(server => server.id == req.params.id)) return res.status(401).send({success: false, error: "Invalid server ID"})

	let id = oauth.generateToken(8)
	while (true) {
		const [rows] = await pool.query("SELECT * FROM `hook` WHERE `id` = ?", [id])
		if (rows.length == 0) break
		id = oauth.generateToken(8)
	}

	const secret = oauth.generateToken()
	await pool.query(
		"INSERT INTO `hook` (`id`, `server`, `webhook`, `name`, `avatar`, `username`, `channel`, `message`, `secret`, `filterEvent`, `filterAction`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
		[id, req.params.id, req.body.webhook, req.body.name, req.body.avatar, req.body.username, req.body.channel, req.body.message, secret, req.body.filterEvent, req.body.filterAction]
	)
	res.send({success: true, id, secret})
})

app.post("/servers/:id/hooks/:hook", async (req, res) => {
	if (!req.signedCookies.token) return res.status(401).send({success: false, error: "Missing token cookie"})

	const servers = await oauth.getUserServers(req.signedCookies.token, pool)
	if (!servers) return res.status(401).send({success: false, error: "Invalid token cookie"})
	if (!servers.some(server => server.id == req.params.id)) return res.status(401).send({success: false, error: "Invalid server ID"})

	const [rows] = await pool.query("SELECT * FROM `hook` WHERE `id` = ?", [req.params.hook])
	if (rows.length == 0) return res.status(404).send({success: false, error: "Invalid hook ID"})

	const hook = rows[0]
	if (hook.server != req.params.id) return res.status(401).send({success: false, error: "Invalid server ID"})

	await pool.query(
		"UPDATE `hook` SET `webhook` = ?, `name` = ?, `avatar` = ?, `username` = ?, `channel` = ?, `message` = ?, `filterEvent` = ?, `filterAction` = ? WHERE `id` = ?",
		[req.body.webhook, req.body.name, req.body.avatar, req.body.username, req.body.channel, req.body.message, req.body.filterEvent, req.body.filterAction, req.params.hook]
	)
	res.send({success: true})
})

app.delete("/servers/:id/hooks/:hook", async (req, res) => {
	if (!req.signedCookies.token) return res.status(401).send({success: false, error: "Missing token cookie"})

	const [rows] = await pool.query("SELECT * FROM `user` WHERE `token` = ?", [req.signedCookies.token])
	if (rows.length == 0) return res.status(401).send({success: false, error: "Invalid token cookie"})

	const servers = await oauth.getUserServers(req.signedCookies.token, pool)
	if (!servers.some(server => server.id == req.params.id)) return res.status(401).send({success: false, error: "Invalid server ID"})

	const [rows2] = await pool.query("SELECT * FROM `hook` WHERE `id` = ?", [req.params.hook])
	if (rows2.length == 0) return res.status(404).send({success: false, error: "Invalid hook ID"})

	const hook = rows2[0]
	if (hook.server != req.params.id) return res.status(401).send({success: false, error: "Invalid server ID"})

	await pool.query("DELETE FROM `hook` WHERE `id` = ?", [req.params.hook])
	res.send({success: true})
})

app.post("/servers/:id/hooks/:hook/regen", async (req, res) => {
	if (!req.signedCookies.token) return res.status(401).send({success: false, error: "Missing token cookie"})

	const servers = await oauth.getUserServers(req.signedCookies.token, pool)
	if (!servers) return res.status(401).send({success: false, error: "Invalid token cookie"})
	if (!servers.some(server => server.id == req.params.id)) return res.status(401).send({success: false, error: "Invalid server ID"})

	const [rows] = await pool.query("SELECT * FROM `hook` WHERE `id` = ?", [req.params.hook])
	if (rows.length == 0) return res.status(404).send({success: false, error: "Invalid hook ID"})

	const hook = rows[0]
	if (hook.server != req.params.id) return res.status(401).send({success: false, error: "Invalid server ID"})

	const secret = oauth.generateToken()
	await pool.query("UPDATE `hook` SET `secret` = ? WHERE `id` = ?", [secret, req.params.hook])
	res.send({success: true, secret})
})

app.get("/login", async (req, res) => {
	if (!req.query.code) return res.status(400).send({success: false, error: "Missing code query parameter"})

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

	if (req.params.secret.startsWith("sha256=")) {
		const sha256 = crypto.createHmac("sha256", hook.secret)
		if (!crypto.timingSafeEqual(Buffer.from("sha256=" + sha256.update(JSON.stringify(req.body)).digest("hex")), Buffer.from(req.params.secret)))
			return res.status(401).send({success: false, error: "Invalid secret in header"})
	} else if (req.params.secret != hook.secret) return res.status(401).send("Invalid secret in URL")

	const githubEvent = req.headers["x-github-event"]
	if (githubEvent == "ping") return res.sendStatus(204)
	if (hook.filterEvent && !hook.filterEvent.includes(githubEvent)) return res.status(202).send({success: true, info: "Event " + encode(githubEvent) + " is disabled in settings for this hook"})

	const data = req.body
	const action = data.action
	if (hook.filterAction && !hook.filterAction.includes(action)) return res.status(202).send({success: true, info: "Action " + encode(action) + " is disabled in settings for this hook"})

	let message = hook.message
	const recursiveFunc = (obj, path = "") => {
		for (const property in obj) {
			if (typeof obj[property] == "object") recursiveFunc(obj[property], path + property + ".")
			// Possible syntax: {sender.login} or {{ sender.login }}
			else message = message.replace(new RegExp("{{? ?" + path + property + " ?}}?", "gi"), obj[property])
		}
	}
	recursiveFunc(data)

	let parsed = {}
	try {
		parsed = JSON.parse(message)
	} catch (e) {
		return res.status(500).send("Invalid JSON in message: " + encode(e.message))
	}

	if (Array.isArray(parsed)) parsed = parsed.find(msg => msg.event == githubEvent && msg.action == action) || parsed.find(msg => msg.event == githubEvent) || parsed[0]
	if (!parsed || Object.keys(parsed).length == 0) return res.status(500).send({success: false, error: "Empty JSON in message"})

	if (hook.webhook) {
		const webhookClient = new Discord.WebhookClient(hook.webhook)
		await webhookClient.send(parsed)
		res.sendStatus(204)
	} else {
		const channel = bot.channels.cache.get(hook.channel)
		if (channel) {
			await channel.send(parsed)
			res.sendStatus(204)
		} else res.status(500).send({success: false, error: "Unable to send message of hook " + hook.id + " because the channel " + hook.channel + " does not exist"})
	}
}

app.post("/hook/:id/:secret", hookFunc)
app.post("/hook/:id", async (req, res) => {
	console.log(req.headers)
	if (!req.get("X-Hub-Signature-256")) return res.status(401).send("Missing X-Hub-Signature-256 header")

	req.params.secret = req.get("X-Hub-Signature-256")
	hookFunc(req, res)
})

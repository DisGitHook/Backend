require("./bot.js")

const { botId, botSecret, userAgent, domain, port, cookieSecret } = require("./config.json")

const oauth = require("./util/oauth.js")
const pool = require("./util/setupDB.js")

const express = require("express")
const cookieParser = require("cookie-parser")

const app = express()
app.use(cookieParser(cookieSecret))
app.listen(port)

// - Dashboard -

app.get("/", (req, res) => {
	res.send({uptime: process.uptime()})
})

app.get("/servers", async (req, res) => {
	if (!req.signedCookies.token) return res.status(401).send("Missing token cookie")

	const servers = await oauth.getUserServers()
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
	console.log(rows)

	if (rows.length == 0) return res.sendStatus(404)

	res.sendStatus(204)
}
app.get("/hook/:id/:secret", hookFunc)
app.post("/hook/:id/:secret", hookFunc)

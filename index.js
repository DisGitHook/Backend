const { port } = require("./config.json")
const pool = require("./util/setupDB.js")

const express = require("express")
const app = express()
app.listen(port)

// - Dashboard -

app.get("/", (req, res) => {
	res.send("ok")
})

app.get("/auth/login", (req, res) => {
	res.send("ok")
})
app.get("/auth/logout", (req, res) => {
	res.send("ok")
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

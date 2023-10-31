const { db } = require("../config.json")

const mysql = require("mysql2")
const mainDB = mysql.createPool(db)
const pool = mainDB.promise()

const express = require("express")
const app = express()

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
	res.sendStatus(204)
}
app.get("/hook/:id/:secret", hookFunc)
app.post("/hook/:id/:secret", hookFunc)

app.listen(25527)

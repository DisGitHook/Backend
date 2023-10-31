const express = require("express")
const app = express()

// - Dashboard -

app.get("/", (req, res) => {
  	res.send({ hello: "world" })
})

// - Hooks -

const hookFunc = async (req, res) => {
	res.send({ hello: "world" })
}
app.get("/hook/:id/:secret", hookFunc)
app.post("/hook/:id/:secret", hookFunc)

app.listen(25527)

const Discord = require("discord.js")
const bot = new Discord.Client({
	allowedMentions: {
		repliedUser: false,
		parse: ["users"]
	},
	failIfNotExists: false,
	intents: [
		Discord.GatewayIntentBits.Guilds
	]
})

const { botToken } = require("./config.json")
bot.login(botToken)
module.exports = bot

const pool = require("./util/setupDB.js")

bot.on("ready", () => {
	bot.user.setPresence({activities: [{name: "Custom Status", state: "Customizable GitHub hooks!", type: Discord.ActivityType.Custom}], status: "dnd"})
})

bot.on("guildDelete", guild => {
	pool.query("DELETE FROM `hook` WHERE `guild` = ?", [guild.id])
})

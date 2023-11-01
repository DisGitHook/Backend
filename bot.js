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

bot.on("ready", () => {
	bot.user.setPresence({activities: [{name: "Custom Status", state: "Wooooo!", type: Discord.ActivityType.Custom}], status: "dnd"})
})

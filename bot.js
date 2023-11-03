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

const oauth = require("./util/oauth.js")
const pool = require("./util/setupDB.js")

const registerSlashcommands = () => {
	bot.application.commands.set([{
		name: "hook",
		type: Discord.ApplicationCommandType.ChatInput,
		description: "Create and edit GitHub event webhooks",
		defaultMemberPermissions: ["ManageGuild"],
		dmPermission: false,
		options: [{
			name: "create",
			type: Discord.ApplicationCommandOptionType.Subcommand,
			description: "Create a new webhook",
			options: [{
				name: "name",
				type: Discord.ApplicationCommandOptionType.String,
				description: "The name of the webhook",
				maxLength: 32,
				required: true
			},{
				name: "events",
				type: Discord.ApplicationCommandOptionType.String,
				description: "Events to trigger the webhook, separated by commas",
				maxLength: 220
			},{
				name: "actions",
				type: Discord.ApplicationCommandOptionType.String,
				description: "Actions (of events) to trigger the webhook, separated by commas",
				maxLength: 220
			}]
		},{
			name: "edit-message",
			type: Discord.ApplicationCommandOptionType.Subcommand,
			description: "Edit the message sent on an event",
			options: [{
				name: "hook",
				type: Discord.ApplicationCommandOptionType.String,
				description: "The webhook to edit",
				maxLength: 32,
				autocomplete: true,
				required: true
			},{
				name: "message",
				type: Discord.ApplicationCommandOptionType.String,
				description: "The new message as template name, JSON object or array",
				required: true
			}]
		},{
			name: "delete",
			type: Discord.ApplicationCommandOptionType.Subcommand,
			description: "Delete a webhook",
			options: [{
				name: "hook",
				type: Discord.ApplicationCommandOptionType.String,
				description: "The webhook to delete",
				maxLength: 32,
				autocomplete: true,
				required: true
			}]
		}]
	}])
}

bot.on("ready", () => {
	bot.user.setPresence({activities: [{name: "Custom Status", state: "Customizable GitHub hooks!", type: Discord.ActivityType.Custom}], status: "online"})

	if (Math.random() > 0.95) registerSlashcommands()
})

bot.on("guildCreate", guild => {
	const embed = new Discord.MessageEmbed()
		.setColor(Discord.Colors.Green)
		.setTitle(guild.name)
		.setThumbnail(guild.iconURL())
		.addField("Member count", "" + guild.memberCount, true)
		.addField("Owner", "<@" + guild.ownerId + ">", true)
	bot.channels.cache.get("1169875077110693951").send({embeds: [embed]})
})

bot.on("guildDelete", guild => {
	pool.query("DELETE FROM `hook` WHERE `guild` = ?", [guild.id])

	const embed = new Discord.MessageEmbed()
		.setColor(Discord.Colors.Red)
		.setTitle(guild.name)
		.setThumbnail(guild.iconURL())
		.addField("Member count", "" + guild.memberCount, true)
		.addField("Owner", "<@" + guild.ownerId + ">", true)
	bot.channels.cache.get("1169875077110693951").send({embeds: [embed]})
})

const channelOrWebhookRow = new Discord.ActionRowBuilder()
	.addComponents(
		new Discord.ChannelSelectMenuBuilder()
			.setCustomId("setup_channel")
			.setChannelTypes([Discord.ChannelType.GuildText, Discord.ChannelType.GuildAnnouncement, Discord.ChannelType.GuildVoice, Discord.ChannelType.GuildStageVoice, Discord.ChannelType.GuildForum])
	)

bot.on("interactionCreate", async interaction => {
	if (interaction.type == Discord.InteractionType.ApplicationCommand) {
		if (interaction.commandName == "hook") {
			const subcommand = interaction.options.getSubcommand()

			if (subcommand == "create") {
				const msg = await interaction.reply({
					content: "You're creating the webhook **" + Discord.escapeMarkdown(interaction.options.getString("name")) + "**.\n\nNow, choose the channel to send the messages to.\n**Tip**: Start typing and the channels matching your input will appear.",
					components: [channelOrWebhookRow],
					fetchReply: true,
					ephemeral: true
				})

				msg.createMessageComponentCollector({componentType: Discord.ComponentType.ChannelSelect}).on("collect", async i => {
					let id = oauth.generateToken(8)
					while (true) {
						const [rows] = await pool.query("SELECT * FROM `hook` WHERE `id` = ?", [id])
						if (rows.length == 0) break
						id = oauth.generateToken(8)
					}

					const secret = oauth.generateToken()
					await pool.query(
						"INSERT INTO `hook` (`id`, `name`, `server`, `webhook`, `channel`, `message`, `secret`, `filterEvent`, `filterAction`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
						[id, interaction.options.getString("name"), interaction.guild.id, null, i.values[0], null, secret,
							interaction.options.getString("events") ? JSON.stringify(interaction.options.getString("events").split(",")) : null,
							interaction.options.getString("actions") ? JSON.stringify(interaction.options.getString("actions").split(",")) : null]
					)

					i.reply({
						content: "Successfully created the hook!\n\nYou can now use it on GitHub to receive events in <#" + i.values[0] + ">.\n\n" +
							"Full POST URL: `https://disgithook-api.tomatenkuchen.com/hook/" + id + "/" + secret +
							"`\nMore secure POST URL with secret in header: `https://disgithook-api.tomatenkuchen.com/hook/" + id + "`\nSecret: `" + secret + "`",
						ephemeral: true
					})
				})
			} else if (subcommand == "edit-message") {
				const [rows] = await pool.query("SELECT * FROM `hook` WHERE `id` = ? AND `server` = ?", [interaction.options.getString("hook"), interaction.guild.id])
				if (rows.length == 0) return interaction.reply({content: "The hook `" + interaction.options.getString("hook") + "` doesn't exist or doesn't belong to this server.", ephemeral: true})

				await pool.query("UPDATE `hook` SET `message` = ? WHERE `id` = ?", [interaction.options.getString("message"), interaction.options.getString("hook")])
				interaction.reply({content: "Successfully updated the hook message of **" + rows[0].name + "**.", ephemeral: true})
			} else if (subcommand == "delete") {
				const [rows] = await pool.query("SELECT * FROM `hook` WHERE `id` = ? AND `server` = ?", [interaction.options.getString("hook"), interaction.guild.id])
				if (rows.length == 0) return interaction.reply({content: "The hook `" + interaction.options.getString("hook") + "` doesn't exist or doesn't belong to this server.", ephemeral: true})

				await pool.query("DELETE FROM `hook` WHERE `id` = ?", [interaction.options.getString("hook")])
				interaction.reply({content: "Successfully deleted the hook **" + rows[0].name + "**.", ephemeral: true})
			}
		}
	} else if (interaction.type == Discord.InteractionType.ApplicationCommandAutocomplete) {
		const [rows] = await pool.query("SELECT * FROM `hook` WHERE `server` = ?", [interaction.guild.id])
		interaction.respond(rows.slice(0, 25).map(hook => ({name: hook.name, value: hook.id})))
	}
})

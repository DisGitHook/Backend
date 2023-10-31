const { botId, botSecret, userAgent } = require("../config.json")

const userCache = {}
module.exports.getUser = async token => {
	if (userCache[token]) return userCache[token]
	const res = await fetch("https://discord.com/api/v10/users/@me", {
		headers: {
			"User-Agent": userAgent,
			Authorization: "Bearer " + token,
			Accept: "application/json"
		}
	})
	if (!res.ok) return new Error("Couldnt get user data, failed with " + res.status + " " + res.statusText)
	const json = await res.json()
	userCache[token] = json
	setTimeout(() => delete userCache[token], 1000 * 60 * 10)
	return json
}

const guildCache = {}
module.exports.getUserGuilds = async token => {
	if (guildCache[token]) return guildCache[token]
	const res = await fetch("https://discord.com/api/v10/users/@me/guilds", {
		headers: {
			"User-Agent": userAgent,
			Authorization: "Bearer " + token,
			Accept: "application/json"
		}
	})
	if (!res.ok) {
		console.log("Couldnt get guild data, failed with " + res.status + " " + res.statusText)
		return new Error("Couldnt get guild data, failed with " + res.status + " " + res.statusText)
	}
	const json = await res.json()
	guildCache[token] = json
	setTimeout(() => delete guildCache[token], 1000 * 60 * 10)
	return json
}

module.exports.getAccessToken = async (userId, tokens, bot) => {
	if (Date.now() > tokens.expires_at) {
		const body = new URLSearchParams({
			client_id: botId,
			client_secret: botSecret,
			grant_type: "refresh_token",
			refresh_token: tokens.refresh_token
		})
		const res = await fetch("https://discord.com/api/v10/oauth2/token", {
			method: "POST",
			body,
			headers: {
				"User-Agent": userAgent,
				"Content-Type": "application/x-www-form-urlencoded",
				Accept: "application/json"
			}
		})
		if (res.ok) {
			const newtokens = await res.json()
			newtokens.expires_at = Date.now() + newtokens.expires_in * 1000
			newtokens.type = tokens.type
			if (tokens.username) newtokens.username = tokens.username
			delete newtokens.expires_in

			// TODO: Store "newtokens" in the database
			return newtokens.access_token
		} else {
			console.log("Error refreshing access token: " + res.status + " " + res.statusText)
			const json = await res.json()
			console.log(json)
		}
	}
	return tokens.access_token
}

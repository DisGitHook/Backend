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
module.exports.getUserServers = async (userId, pool) => {
	const token = await this.getAccessToken(userId, pool)
	if (!token) return new Error("Couldnt get access token")

	if (guildCache[token]) return guildCache[token]
	const res = await fetch("https://discord.com/api/v10/users/@me/guilds", {
		headers: {
			"User-Agent": userAgent,
			Authorization: "Bearer " + token,
			Accept: "application/json"
		}
	})
	if (!res.ok) return new Error("Couldnt get guild data, failed with " + res.status + " " + res.statusText)

	const json = await res.json()
	guildCache[token] = json
	setTimeout(() => delete guildCache[token], 1000 * 60 * 10)
	return json
}

module.exports.getAccessToken = async (userId, pool) => {
	const token = pool.query("SELECT * FROM `user` WHERE `id` = ?", [userId])

	if (token && Date.now() > token.expires_at) {
		const body = new URLSearchParams({
			client_id: botId,
			client_secret: botSecret,
			grant_type: "refresh_token",
			refresh_token: token.refresh
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
			newtokens.type = token.type
			delete newtokens.expires_in

			pool.query(
				"INSERT INTO `user` (`id`, `token`, `access`, `refresh`, `expires`) VALUES (?, ?, ?, ?, ?) ON DUPLICATE KEY UPDATE `token` = ?, `access` = ?, `refresh` = ?, `expires` = ?",
				[user.id, token, user.access_token, user.refresh_token, Date.now() + user.expires_in * 1000, token, user.access_token, user.refresh_token, Date.now() + user.expires_in * 1000]
			)
			return newtokens.access_token
		} else {
			console.log("Error refreshing access token: " + res.status + " " + res.statusText)
			const json = await res.json()
			console.log(json)
		}
	}

	return token ? token.access : void 0
}

module.exports.generateToken = () => {
	let result = ""
	const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789.,-!=?@#$%&*()"

	for (let i = 0; i < 20; i++) result += characters.charAt(Math.floor(Math.random() * characters.length))
	return result
}

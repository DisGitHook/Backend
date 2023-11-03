const color = require("../util/color.js")

module.exports = [
	{
		action: "revoked",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "Revoked authorization",
			color: color("gray")
		}]
	}
]

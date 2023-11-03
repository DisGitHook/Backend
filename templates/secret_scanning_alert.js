const color = require("../util/color.js")

module.exports = [
	{
		action: "created",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`secret_scanning_alert` (`created`)",
			color: color("green")
		}]
	},{
		action: "reopened",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`secret_scanning_alert` (`reopened`)",
			color: color("black")
		}]
	},{
		action: "resolved",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`secret_scanning_alert` (`resolved`)",
			color: color("green")
		}]
	},{
		action: "revoked",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`secret_scanning_alert` (`revoked`)",
			color: color("black")
		}]
	}
]

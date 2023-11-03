const color = require("../util/color.js")

module.exports = [
	{
		action: "approved",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`personal_access_token_request` (`approved`)",
			color: color("green")
		}]
	},{
		action: "cancelled",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`personal_access_token_request` (`cancelled`)",
			color: color("black")
		}]
	},{
		action: "created",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`personal_access_token_request` (`created`)",
			color: color("green")
		}]
	},{
		action: "denied",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`personal_access_token_request` (`denied`)",
			color: color("black")
		}]
	}
]

const color = require("../util/color.js")

module.exports = [
	{
		action: "disabled",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`branch_protection_configuration` (`disabled`)",
			color: color("black")
		}]
	},{
		action: "enabled",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`branch_protection_configuration` (`enabled`)",
			color: color("black")
		}]
	}
]

const color = require("../util/color.js")

module.exports = [
	{
		action: "approved",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`deployment_review` (`approved`)",
			color: color("green")
		}]
	},{
		action: "rejected",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`deployment_review` (`rejected`)",
			color: color("red")
		}]
	},{
		action: "requested",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`deployment_review` (`requested`)",
			color: color("black")
		}]
	}
]

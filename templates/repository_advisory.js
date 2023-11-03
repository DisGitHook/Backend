const color = require("../util/color.js")

module.exports = [
	{
		action: "published",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`repository_advisory` (`published`)",
			color: color("black")
		}]
	},{
		action: "reported",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`repository_advisory` (`reported`)",
			color: color("black")
		}]
	}
]

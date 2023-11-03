const color = require("../util/color.js")

module.exports = [
	{
		action: "added",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`membership` (`added`)",
			color: color("black")
		}]
	},{
		action: "removed",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`membership` (`removed`)",
			color: color("black")
		}]
	}
]

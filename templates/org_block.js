const color = require("../util/color.js")

module.exports = [
	{
		action: "blocked",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`org_block` (`blocked`)",
			color: color("black")
		}]
	},{
		action: "unblocked",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`org_block` (`unblocked`)",
			color: color("black")
		}]
	}
]

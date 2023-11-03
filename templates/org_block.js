const color = require("../util/color.js")

module.exports = [
	{
		action: "blocked",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "[[{{ repository.name }}]({{ repository.html_url }}):{{ repository.default_branch }}] `org_block` (`blocked`)",
			color: color("black")
		}]
	},{
		action: "unblocked",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "[[{{ repository.name }}]({{ repository.html_url }}):{{ repository.default_branch }}] `org_block` (`unblocked`)",
			color: color("black")
		}]
	}
]

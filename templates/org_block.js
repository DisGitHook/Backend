const color = require("../util/color.js")

module.exports = [
	{
		action: "blocked",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "[{{ repository.name }}:{{ repository.default_branch }}] `org_block` (`blocked`)",
			url: "{{ repository.html_url }}",
			color: color("black")
		}]
	},{
		action: "unblocked",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "[{{ repository.name }}:{{ repository.default_branch }}] `org_block` (`unblocked`)",
			url: "{{ repository.html_url }}",
			color: color("black")
		}]
	}
]

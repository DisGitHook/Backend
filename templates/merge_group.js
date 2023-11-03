const color = require("../util/color.js")

module.exports = [
	{
		action: "checks_requested",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "[{{ repository.name }}:{{ repository.default_branch }}] `merge_group` (`checks_requested`)",
			url: "{{ repository.html_url }}",
			color: color("black")
		}]
	},{
		action: "destroyed",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "[{{ repository.name }}:{{ repository.default_branch }}] `merge_group` (`destroyed`)",
			url: "{{ repository.html_url }}",
			color: color("darkRed")
		}]
	}
]

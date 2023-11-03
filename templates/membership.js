const color = require("../util/color.js")

module.exports = [
	{
		action: "added",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "[{{ repository.name }}:{{ repository.default_branch }}] `membership` (`added`)",
			url: "{{ repository.html_url }}",
			color: color("black")
		}]
	},{
		action: "removed",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "[{{ repository.name }}:{{ repository.default_branch }}] `membership` (`removed`)",
			url: "{{ repository.html_url }}",
			color: color("black")
		}]
	}
]

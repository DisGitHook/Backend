const color = require("../util/color.js")

module.exports = [
	{
		action: "completed",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "[{{ repository.name }}:{{ repository.default_branch }}] `check_suite` (`completed`)",
			url: "{{ repository.html_url }}",
			color: color("black")
		}]
	},{
		action: "requested",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "[{{ repository.name }}:{{ repository.default_branch }}] `check_suite` (`requested`)",
			url: "{{ repository.html_url }}",
			color: color("black")
		}]
	},{
		action: "rerequested",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "[{{ repository.name }}:{{ repository.default_branch }}] `check_suite` (`rerequested`)",
			url: "{{ repository.html_url }}",
			color: color("black")
		}]
	}
]

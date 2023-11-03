const color = require("../util/color.js")

module.exports = [
	{
		action: "completed",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "[{{ repository.name }}:{{ repository.default_branch }}] `check_run` (`completed`)",
			url: "{{ repository.html_url }}",
			color: color("black")
		}]
	},{
		action: "created",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "[{{ repository.name }}:{{ repository.default_branch }}] `check_run` (`created`)",
			url: "{{ repository.html_url }}",
			color: color("green")
		}]
	},{
		action: "requested_action",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "[{{ repository.name }}:{{ repository.default_branch }}] `check_run` (`requested_action`)",
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
			title: "[{{ repository.name }}:{{ repository.default_branch }}] `check_run` (`rerequested`)",
			url: "{{ repository.html_url }}",
			color: color("black")
		}]
	}
]

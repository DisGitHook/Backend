const color = require("../util/color.js")

module.exports = [
	{
		action: "resolved",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "[{{ repository.name }}] Conversation on Pull Request **#{{ pull_request.number }}** resolved",
			url: "{{ thread.comments.html_url }}",
			color: color("green")
		}]
	},{
		action: "unresolved",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "[{{ repository.name }}] Conversation on Pull Request **#{{ pull_request.number }}** unresolved",
			url: "{{ thread.comments.html_url }}",
			color: color("red")
		}]
	}
]

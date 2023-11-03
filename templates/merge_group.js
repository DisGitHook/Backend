const color = require("../util/color.js")

module.exports = [
	{
		action: "checks_requested",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "[{{ repository.name }}] Merge queue checks requested",
			url: "{{ repository.html_url }}",
			description: "{{ merge_queue.head_commit.message }}",
			color: color("blue")
		}]
	},{
		action: "destroyed",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "[{{ repository.name }}] Merge queue destroyed",
			url: "{{ repository.html_url }}",
			description: "{{ merge_queue.head_commit.message }}",
			color: color("red")
		}]
	}
]

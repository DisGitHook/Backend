const color = require("../util/color.js")

module.exports = [
	{
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "[{{ repository.full_name }}] Repository imported",
			url: "{{ repository.html_url }}",
			description: "Status: {{ status }}",
			color: color("darkGreen")
		}]
	}
]

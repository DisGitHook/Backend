const color = require("../util/color.js")

module.exports = [
	{
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}",
				url: "{{ sender.html_url }}"
			},
			title: "[{{ repository.name }}] Git {{ ref_type }} created",
			url: "{{ repository.html_url }}",
			description: "```{{ ref }}```",
			color: color("darkGreen")
		}]
	}
]

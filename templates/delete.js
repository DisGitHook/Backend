const color = require("../util/color.js")

module.exports = [
	{
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "[{{ repository.name }}] Git {{ ref_type }} deleted",
			url: "{{ repository.html_url }}",
			description: "```{{ ref }}```",
			color: color("darkRed")
		}]
	}
]

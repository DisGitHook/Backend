const color = require("../util/color.js")

module.exports = [
	{
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "[{{ repository.name }}] Team **{{ team.name }}** added",
			url: "{{ team.html_url }}",
			color: color("black")
		}]
	}
]

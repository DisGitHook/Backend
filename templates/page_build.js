const color = require("../util/color.js")

module.exports = [
	{
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "[{{ repository.name }}] Page build {{ build.status }}",
			url: "{{ build.url }}",
			color: color("black")
		}]
	}
]

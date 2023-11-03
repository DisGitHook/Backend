const color = require("../util/color.js")

module.exports = [
	{
		action: "started",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}",
				url: "{{ sender.html_url }}"
			},
			title: "[{{ repository.name }}] `watch` (`started`)",
			url: "{{ repository.html_url }}",
			color: color("black")
		}]
	}
]

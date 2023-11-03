const color = require("../util/color.js")

module.exports = [
	{
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}",
				url: "{{ sender.html_url }}"
			},
			title: "[{{ forkee.full_name }}] Fork created",
			url: "{{ forkee.html_url }}",
			color: color("magenta")
		}]
	}
]

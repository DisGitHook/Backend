const color = require("../util/color.js")

module.exports = [
	{
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "[{{ repository.name }}] **{{ count(pages) }}** wiki pages updated",
			url: "{{ repository.html_url }}",
			color: color("cyan")
		}]
	}
]

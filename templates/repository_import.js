const color = require("../util/color.js")

module.exports = [
	{
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}",
				url: "{{ sender.html_url }}"
			},
			title: "[{{ repository.full_name }}] Repository import {{ status }}",
			url: "{{ repository.html_url }}",
			color: color("darkGreen")
		}]
	}
]

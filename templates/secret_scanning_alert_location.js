const color = require("../util/color.js")

module.exports = [
	{
		action: "created",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}",
				url: "{{ sender.html_url }}"
			},
			title: "[{{ repository.name }}] `secret_scanning_alert_location` (`created`)",
			url: "{{ repository.html_url }}",
			color: color("green")
		}]
	}
]

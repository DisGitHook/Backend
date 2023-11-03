const color = require("../util/color.js")

module.exports = [
	{
		action: "requested",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "[{{ repository.name }}:{{ repository.default_branch }}] Deployment protection rule requested",
			url: "{{ repository.html_url }}",
			color: color("black")
		}]
	}
]

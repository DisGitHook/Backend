const color = require("../util/color.js")

module.exports = [
	{
		action: "renamed",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "Renamed {{ target_type }} from **{{ changes.login.from }}** to **{{ repository.name || organization.name }}**",
			color: color("magenta")
		}]
	}
]

const color = require("../util/color.js")

module.exports = [
	{
		action: "renamed",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "[{{ repository.name }}:{{ repository.default_branch }}] `installation_target` (`renamed`)",
			url: "{{ repository.html_url }}",
			color: color("black")
		}]
	}
]

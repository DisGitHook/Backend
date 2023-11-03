const color = require("../util/color.js")

module.exports = [
	{
		action: "renamed",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "[[{{ repository.name }}]({{ repository.html_url }}):{{ repository.default_branch }}] `installation_target` (`renamed`)",
			color: color("black")
		}]
	}
]

const color = require("../util/color.js")

module.exports = [
	{
		action: "requested",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "[[{{ repository.name }}]({{ repository.html_url }}):{{ repository.default_branch }}] `deployment_protection_rule` (`requested`)",
			color: color("black")
		}]
	}
]

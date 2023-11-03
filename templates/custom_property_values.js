const color = require("../util/color.js")

module.exports = [
	{
		action: "updated",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "[[{{ repository.name }}]({{ repository.html_url }}):{{ repository.default_branch }}] `custom_property_values` (`updated`)",
			color: color("black")
		}]
	}
]

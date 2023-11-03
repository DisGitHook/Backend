const color = require("../util/color.js")

module.exports = [
	{
		action: "updated",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "[{{ repository.name }}:{{ repository.default_branch }}] `custom_property_values` (`updated`)",
			url: "{{ repository.html_url }}",
			color: color("cyan")
		}]
	}
]

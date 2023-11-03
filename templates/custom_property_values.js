const color = require("../util/color.js")

module.exports = [
	{
		action: "updated",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}",
				url: "{{ sender.html_url }}"
			},
			title: "[{{ repository.name }}] Custom property values updated",
			url: "{{ repository.html_url }}/settings/custom-properties",
			description: "Now **{{ count(new_property_values) }}** custom property values, old amount was **{{ count(old_property_values) }}**",
			color: color("cyan")
		}]
	}
]

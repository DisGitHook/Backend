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
			title: "[{{ organization.name }}] **{{ definition.property_name }}** {{ definition.value_type }} custom property created",
			url: "https://github.com/organizations/{{ organization.login }}/settings/custom-properties",
			description: "{{ definition.description }}",
			color: color("green")
		}]
	},{
		action: "deleted",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}",
				url: "{{ sender.html_url }}"
			},
			title: "[{{ organization.name }}] Custom property **{{ definition.property_name }}** deleted",
			url: "https://github.com/organizations/{{ organization.login }}/settings/custom-properties",
			description: "{{ definition.description }}",
			color: color("red")
		}]
	},{
		action: "updated",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}",
				url: "{{ sender.html_url }}"
			},
			title: "[{{ repository.name }}] Custom property **{{ definition.property_name }}** updated",
			url: "https://github.com/organizations/{{ organization.login }}/settings/custom-properties",
			description: "{{ definition.description }}",
			color: color("cyan")
		}]
	}
]

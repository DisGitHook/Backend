const color = require("../util/color.js")

module.exports = [
	{
		action: "closed",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}",
				url: "{{ sender.html_url }}"
			},
			title: "Project **{{ projects_v2.name }}** closed",
			url: "{{ projects_v2.html_url }}",
			color: color("gray")
		}]
	},{
		action: "created",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}",
				url: "{{ sender.html_url }}"
			},
			title: "New project **{{ projects_v2.name }}** created",
			url: "{{ projects_v2.html_url }}",
			description: "{{ projects_v2.short_description }}\n\n{{ projects_v2.description }}",
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
			title: "Project **{{ projects_v2.name }}** deleted",
			url: "{{ organization.html_url }}",
			color: color("red")
		}]
	},{
		action: "edited",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}",
				url: "{{ sender.html_url }}"
			},
			title: "Project **{{ projects_v2.name }}** edited",
			url: "{{ projects_v2.html_url }}",
			color: color("cyan")
		}]
	},{
		action: "reopened",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}",
				url: "{{ sender.html_url }}"
			},
			title: "Project **{{ projects_v2.name }}** reopened",
			url: "{{ projects_v2.html_url }}",
			color: color("gray")
		}]
	}
]

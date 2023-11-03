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
			title: "[{{ repository.name }}] Milestone **{{ milestone.title }}** closed",
			url: "{{ milestone.html_url }}",
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
			title: "[{{ repository.name }}] Milestone **{{ milestone.title }}** created",
			url: "{{ milestone.html_url }}",
			description: "{{ milestone.description }}",
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
			title: "[{{ repository.name }}] Milestone **{{ milestone.title }}** deleted",
			url: "{{ milestone.html_url }}",
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
			title: "[{{ repository.name }}] Milestone **{{ milestone.title }}** edited",
			url: "{{ milestone.html_url }}",
			description: "Open issues: **{{ milestone.open_issues }}**\nClosed issues: **{{ milestone.closed_issues }}**\n\n{{ milestone.description }}",
			color: color("cyan")
		}]
	},{
		action: "opened",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}",
				url: "{{ sender.html_url }}"
			},
			title: "[{{ repository.name }}] Milestone **{{ milestone.title }}** opened",
			url: "{{ milestone.html_url }}",
			color: color("gray")
		}]
	}
]

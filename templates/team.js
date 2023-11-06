const color = require("../util/color.js")

module.exports = [
	{
		action: "added_to_repository",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}",
				url: "{{ sender.html_url }}"
			},
			title: "[{{ repository.name }}] Team **{{ team.name }}** added",
			url: "{{ repository.html_url }}",
			color: color("white")
		}]
	},{
		action: "created",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}",
				url: "{{ sender.html_url }}"
			},
			title: "Team **{{ team.name }}** created",
			url: "{{ team.html_url }}",
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
			title: "Team **{{ team.name }}** deleted",
			url: "{{ team.html_url }}",
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
			title: "Team **{{ team.name }}** edited",
			url: "{{ team.html_url }}",
			color: color("cyan")
		}]
	},{
		action: "removed_from_repository",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}",
				url: "{{ sender.html_url }}"
			},
			title: "[{{ repository.name }}] Team **{{ team.name }}** removed",
			url: "{{ repository.html_url }}",
			color: color("red")
		}]
	}
]

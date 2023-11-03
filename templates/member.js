const color = require("../util/color.js")

module.exports = [
	{
		action: "added",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}",
				url: "{{ sender.html_url }}"
			},
			title: "[{{ repository.name }}] Collaborator **{{ member.login }}** added",
			url: "{{ repository.html_url }}/settings/access",
			thumbnail: {
				url: "{{ member.avatar_url }}"
			},
			color: color("white")
		}]
	},{
		action: "edited",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}",
				url: "{{ sender.html_url }}"
			},
			title: "[{{ repository.name }}] Edited **{{ member.login }}**'s member permissions",
			url: "{{ repository.html_url }}/settings/access",
			thumbnail: {
				url: "{{ member.avatar_url }}"
			},
			color: color("cyan")
		}]
	},{
		action: "removed",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}",
				url: "{{ sender.html_url }}"
			},
			title: "[{{ repository.name }}] Collaborator **{{ member.login }}** removed",
			url: "{{ repository.html_url }}/settings/access",
			thumbnail: {
				url: "{{ member.avatar_url }}"
			},
			color: color("black")
		}]
	}
]

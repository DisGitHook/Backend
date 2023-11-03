const color = require("../util/color.js")

module.exports = [
	{
		action: "added",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "[{{ repository.name }}] Added **{{ member.login }}** as member",
			url: "{{ repository.html_url }}",
			thumbnail: {
				url: "{{ member.avatar_url }}"
			},
			color: color("black")
		}]
	},{
		action: "edited",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "[{{ repository.name }}] Edited **{{ member.login }}**'s member permissions",
			url: "{{ repository.html_url }}",
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
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "[{{ repository.name }}] Removed **{{ member.login }}** as member",
			url: "{{ repository.html_url }}",
			thumbnail: {
				url: "{{ member.avatar_url }}"
			},
			color: color("black")
		}]
	}
]

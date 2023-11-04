const color = require("../util/color.js")

module.exports = [
	{
		action: "archived",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}",
				url: "{{ sender.html_url }}"
			},
			title: "[{{ repository.name }}] Repository archived",
			url: "{{ repository.html_url }}",
			color: color("yellow")
		}]
	},{
		action: "created",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}",
				url: "{{ sender.html_url }}"
			},
			title: "[{{ repository.name }}] Repository created",
			url: "{{ repository.html_url }}",
			color: color("green")
		}]
	},{
		action: "edited",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}",
				url: "{{ sender.html_url }}"
			},
			title: "[{{ repository.name }}] Repository edited",
			url: "{{ repository.html_url }}",
			color: color("cyan")
		}]
	},{
		action: "privatized",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}",
				url: "{{ sender.html_url }}"
			},
			title: "[{{ repository.name }}] Repository privatized",
			url: "{{ repository.html_url }}",
			color: color("blue")
		}]
	},{
		action: "publicized",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}",
				url: "{{ sender.html_url }}"
			},
			title: "[{{ repository.name }}] Repository publicized",
			url: "{{ repository.html_url }}",
			color: color("blue")
		}]
	},{
		action: "renamed",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}",
				url: "{{ sender.html_url }}"
			},
			title: "[{{ repository.name }}] Repository renamed from **{{ changes.repository.name.from }}**",
			url: "{{ repository.html_url }}",
			color: color("cyan")
		}]
	},{
		action: "transferred",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}",
				url: "{{ sender.html_url }}"
			},
			title: "[{{ repository.name }}] Repository transferred from **{{ changes.owner.from.organization.login || changes.owner.from.user.login }}**",
			url: "{{ repository.html_url }}",
			color: color("cyan")
		}]
	},{
		action: "unarchived",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}",
				url: "{{ sender.html_url }}"
			},
			title: "[{{ repository.name }}] Repository unarchived",
			url: "{{ repository.html_url }}",
			color: color("green")
		}]
	}
]

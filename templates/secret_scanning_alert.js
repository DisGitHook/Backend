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
			title: "[{{ repository.name }}] Detected secret **{{ alert.secret_type }}**",
			url: "{{ alert.html_url }}",
			color: color("darkRed")
		}]
	},{
		action: "reopened",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}",
				url: "{{ sender.html_url }}"
			},
			title: "[{{ repository.name }}] Secret scanning alert **#{{ alert.number }}** reopened",
			url: "{{ alert.html_url }}",
			color: color("red")
		}]
	},{
		action: "resolved",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}",
				url: "{{ sender.html_url }}"
			},
			title: "[{{ repository.name }}] Secret scanning alert resolved as **{{ alert.resolution }}**",
			url: "{{ alert.html_url }}",
			description: "{{ alert.resolution_comment }}",
			color: color("green")
		}]
	},{
		action: "revoked",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}",
				url: "{{ sender.html_url }}"
			},
			title: "[{{ repository.name }}] Secret of alert **#{{ alert.number }}** revoked",
			url: "{{ alert.html_url }}",
			color: color("green")
		}]
	}
]

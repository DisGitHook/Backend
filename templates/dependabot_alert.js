const color = require("../util/color.js")

module.exports = [
	{
		action: "auto_dismissed",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}",
				url: "{{ sender.html_url }}"
			},
			title: "[{{ repository.name }}] Dependabot alert **#{{ alert.number }}** automatically dismissed",
			url: "{{ alert.html_url }}",
			color: color("green")
		}]
	},{
		action: "auto_reopened",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}",
				url: "{{ sender.html_url }}"
			},
			title: "[{{ repository.name }}] Dependabot alert **#{{ alert.number }}** automatically reopened",
			url: "{{ alert.html_url }}",
			color: color("red")
		}]
	},{
		action: "created",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}",
				url: "{{ sender.html_url }}"
			},
			title: "[{{ repository.name }}] Dependabot alert **#{{ alert.number }}** created for **{{ alert.dependency.package.name }}**",
			url: "{{ alert.html_url }}",
			description: "{{ alert.security_advisory.cve_id }}",
			color: color("red")
		}]
	},{
		action: "dismissed",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}",
				url: "{{ sender.html_url }}"
			},
			title: "[{{ repository.name }}] Dependabot alert **#{{ alert.number }}** dismissed for {{ alert.dismissed_reason }}",
			url: "{{ alert.html_url }}",
			description: "{{ alert.dismissed_comment }}",
			color: color("yellow")
		}]
	},{
		action: "fixed",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}",
				url: "{{ sender.html_url }}"
			},
			title: "[{{ repository.name }}] Dependabot alert **#{{ alert.number }}** fixed",
			url: "{{ alert.html_url }}",
			color: color("green")
		}]
	},{
		action: "reintroduced",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}",
				url: "{{ sender.html_url }}"
			},
			title: "[{{ repository.name }}] Dependabot alert **#{{ alert.number }}** reintroduced",
			url: "{{ repository.html_url }}",
			color: color("red")
		}]
	},{
		action: "reopened",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}",
				url: "{{ sender.html_url }}"
			},
			title: "[{{ repository.name }}] Dependabot alert **#{{ alert.number }}** reopened",
			url: "{{ alert.html_url }}",
			color: color("yellow")
		}]
	}
]

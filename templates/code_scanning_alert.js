const color = require("../util/color.js")

module.exports = [
	{
		action: "appeared_in_branch",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}",
				url: "{{ sender.html_url }}"
			},
			title: "[{{ repository.name }}] Code scanning alert **#{{ alert.number }}** appeared in {{ ref }}",
			url: "{{ alert.html_url }}",
			color: color("red")
		}]
	},{
		action: "closed_by_user",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}",
				url: "{{ sender.html_url }}"
			},
			title: "[{{ repository.name }}] Code scanning alert **#{{ alert.number }}** closed as {{ alert.dismissed_reason }}",
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
			title: "[{{ repository.name }}] Code scanning alert **#{{ alert.number }}** created",
			url: "{{ alert.html_url }}",
			color: color("red")
		}]
	},{
		action: "fixed",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}",
				url: "{{ sender.html_url }}"
			},
			title: "[{{ repository.name }}] Code scanning alert **#{{ alert.number }}** fixed",
			url: "{{ alert.html_url }}",
			color: color("green")
		}]
	},{
		action: "reopened",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}",
				url: "{{ sender.html_url }}"
			},
			title: "[{{ repository.name }}] Code scanning alert **#{{ alert.number }}** reopened",
			url: "{{ alert.html_url }}",
			color: color("red")
		}]
	},{
		action: "reopened_by_user",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}",
				url: "{{ sender.html_url }}"
			},
			title: "[{{ repository.name }}] Code scanning alert **#{{ alert.number }}** reopened",
			url: "{{ alert.html_url }}",
			color: color("red")
		}]
	}
]

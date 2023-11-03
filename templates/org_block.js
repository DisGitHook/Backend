const color = require("../util/color.js")

module.exports = [
	{
		action: "blocked",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "[{{ organization.name }}] User **{{ blocked_user.login }}** blocked",
			url: "{{ organization.html_url }}",
			thumbnail: {
				url: "{{ blocked_user.avatar_url }}"
			},
			color: color("red")
		}]
	},{
		action: "unblocked",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "[{{ organization.name }}] User **{{ blocked_user.login }}** unblocked",
			url: "{{ organization.html_url }}",
			thumbnail: {
				url: "{{ blocked_user.avatar_url }}"
			},
			color: color("green")
		}]
	}
]

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
			title: "[{{ team.name }}] Added **{{ member.login }}** as member",
			url: "{{ team.html_url }}",
			color: color("green")
		}]
	},{
		action: "removed",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}",
				url: "{{ sender.html_url }}"
			},
			title: "[{{ team.name }}] Removed **{{ member.login }}** as member",
			url: "{{ team.html_url }}",
			color: color("red")
		}]
	}
]

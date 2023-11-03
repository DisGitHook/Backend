const color = require("../util/color.js")

module.exports = [
	{
		action: "published",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "[{{ repository.name }}] Package {{ package.namespace }}/**{{ package.name }}** published on {{ package.registry.vendor }}",
			url: "{{ package.html_url }}",
			color: color("green")
		}]
	},{
		action: "updated",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "[{{ repository.name }}] Package {{ package.namespace }}/**{{ package.name }}** updated",
			url: "{{ package.html_url }}",
			color: color("cyan")
		}]
	}
]

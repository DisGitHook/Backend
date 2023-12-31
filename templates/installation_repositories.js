const color = require("../util/color.js")

module.exports = [
	{
		action: "added",
		embeds: [{
			author: {
				name: "{{ requester.login }}",
				icon_url: "{{ requester.avatar_url }}"
			},
			title: "**{{ count(repositories_added) }}** repositories added to **{{ installation.account.login }}**",
			url: "{{ organization.html_url }}",
			color: color("green")
		}]
	},{
		action: "removed",
		embeds: [{
			author: {
				name: "{{ requester.login }}",
				icon_url: "{{ requester.avatar_url }}"
			},
			title: "**{{ count(repositories_removed) }}** repositories removed from **{{ installation.account.login }}**",
			url: "{{ organization.html_url }}",
			color: color("red")
		}]
	}
]

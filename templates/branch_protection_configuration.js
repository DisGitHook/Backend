const color = require("../util/color.js")

module.exports = [
	{
		action: "disabled",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}",
				url: "{{ sender.html_url }}"
			},
			title: "[{{ repository.name }}] All branch protection rules disabled",
			url: "{{ repository.html_url }}",
			color: color("darkRed")
		}]
	},{
		action: "enabled",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}",
				url: "{{ sender.html_url }}"
			},
			title: "[{{ repository.name }}] All branch protection rules enabled",
			url: "{{ repository.html_url }}",
			color: color("darkGreen")
		}]
	}
]

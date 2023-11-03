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
			title: "[{{ repository.name }}] `branch_protection_configuration` (`disabled`)",
			url: "{{ repository.html_url }}",
			color: color("black")
		}]
	},{
		action: "enabled",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}",
				url: "{{ sender.html_url }}"
			},
			title: "[{{ repository.name }}] `branch_protection_configuration` (`enabled`)",
			url: "{{ repository.html_url }}",
			color: color("black")
		}]
	}
]

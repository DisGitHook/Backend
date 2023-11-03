const color = require("../util/color.js")

module.exports = [
	{
		action: "published",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "[{{ repository.name }}:{{ repository.default_branch }}] `repository_advisory` (`published`)",
			url: "{{ repository.html_url }}",
			color: color("black")
		}]
	},{
		action: "reported",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "[{{ repository.name }}:{{ repository.default_branch }}] `repository_advisory` (`reported`)",
			url: "{{ repository.html_url }}",
			color: color("black")
		}]
	}
]

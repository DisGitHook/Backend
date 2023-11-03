const color = require("../util/color.js")

module.exports = [
	{
		action: "published",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "[{{ repository.name }}:{{ repository.default_branch }}] `security_advisory` (`published`)",
			url: "{{ repository.html_url }}",
			color: color("black")
		}]
	},{
		action: "updated",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "[{{ repository.name }}:{{ repository.default_branch }}] `security_advisory` (`updated`)",
			url: "{{ repository.html_url }}",
			color: color("cyan")
		}]
	},{
		action: "withdrawn",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "[{{ repository.name }}:{{ repository.default_branch }}] `security_advisory` (`withdrawn`)",
			url: "{{ repository.html_url }}",
			color: color("black")
		}]
	}
]

const color = require("../util/color.js")

module.exports = [
	{
		action: "approved",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}",
				url: "{{ sender.html_url }}"
			},
			title: "[{{ repository.name }}] `deployment_review` (`approved`)",
			url: "{{ repository.html_url }}",
			color: color("green")
		}]
	},{
		action: "rejected",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}",
				url: "{{ sender.html_url }}"
			},
			title: "[{{ repository.name }}] `deployment_review` (`rejected`)",
			url: "{{ repository.html_url }}",
			color: color("red")
		}]
	},{
		action: "requested",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}",
				url: "{{ sender.html_url }}"
			},
			title: "[{{ repository.name }}] `deployment_review` (`requested`)",
			url: "{{ repository.html_url }}",
			color: color("black")
		}]
	}
]

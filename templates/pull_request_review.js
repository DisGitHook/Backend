const color = require("../util/color.js")

module.exports = [
	{
		action: "dismissed",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "[{{ repository.name }}] Review on Pull Request **#{{ pull_request.number }}** dismissed",
			url: "{{ review.html_url }}",
			color: color("magenta")
		}]
	},{
		action: "edited",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "[{{ repository.name }}] Review on Pull Request **#{{ pull_request.number }}** edited",
			url: "{{ review.html_url }}",
			color: color("cyan")
		}]
	},{
		action: "submitted",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "[{{ repository.name }}] Review on Pull Request **#{{ pull_request.number }}** submitted",
			url: "{{ review.html_url }}",
			color: color("green")
		}]
	}
]

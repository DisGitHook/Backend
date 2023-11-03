const color = require("../util/color.js")

module.exports = [
	{
		action: "created",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}",
				url: "{{ sender.html_url }}"
			},
			title: "[{{ repository.name }}] New pull request review comment on **#{{ pull_request.number }}**",
			url: "{{ comment.html_url }}",
			description: "{{ comment.body }}",
			color: color("green")
		}]
	},{
		action: "deleted",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}",
				url: "{{ sender.html_url }}"
			},
			title: "[{{ repository.name }}] Pull request review comment deleted on **#{{ pull_request.number }}**",
			url: "{{ comment.html_url }}",
			color: color("red")
		}]
	},{
		action: "edited",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}",
				url: "{{ sender.html_url }}"
			},
			title: "[{{ repository.name }}] Pull request review comment edited on **#{{ pull_request.number }}**",
			url: "{{ comment.html_url }}",
			description: "{{ comment.body }}",
			color: color("cyan")
		}]
	}
]

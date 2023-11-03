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
			title: "[{{ repository.name }}] Commented on issue **#{{ issue.number }}**",
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
			title: "[{{ repository.name }}] Comment on issue **#{{ issue.number }}** deleted",
			url: "{{ comment.html_url }}",
			description: "{{ comment.body }}",
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
			title: "[{{ repository.name }}] Comment on issue **#{{ issue.number }}** edited",
			url: "{{ comment.html_url }}",
			description: "{{ comment.body }}",
			color: color("cyan")
		}]
	}
]

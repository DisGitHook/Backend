const color = require("../util/color.js")

module.exports = [
	{
		action: "dismissed",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "[{{ repository.name }}:{{ repository.default_branch }}] Pull Request review dismissed",
			url: "{{ pull_request.review_comment_url }}",
			color: color("red")
		}]
	},{
		action: "edited",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "[{{ repository.name }}:{{ repository.default_branch }}] Pull Request review edited",
			url: "{{ pull_request.review_comment_url }}",
			color: color("cyan")
		}]
	},{
		action: "submitted",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "[{{ repository.name }}:{{ repository.default_branch }}] `pull_request_review` (`submitted`)",
			url: "{{ pull_request.review_comment_url }}",
			color: color("green")
		}]
	}
]

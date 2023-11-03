const color = require("../util/color.js")

module.exports = [
	{
		action: "created",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "[{{ repository.name }}:{{ repository.default_branch }}] `commit_comment` (`created`)",
			url: "{{ repository.html_url }}",
			color: color("green")
		}]
	}
]

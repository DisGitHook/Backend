const color = require("../util/color.js")

module.exports = [
	{
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "[{{ repository.name }}:{{ repository.default_branch }}] `workflow_dispatch`",
			url: "{{ repository.html_url }}",
			color: color("black")
		}]
	}
]

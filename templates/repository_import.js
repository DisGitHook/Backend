const color = require("../util/color.js")

module.exports = [
	{
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "[{{ repository.name }}:{{ repository.default_branch }}] Repository imported",
			url: "{{ repository.html_url }}",
			color: color("darkGreen")
		}]
	}
]

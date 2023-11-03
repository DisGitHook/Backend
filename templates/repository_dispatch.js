const color = require("../util/color.js")

module.exports = [
	{
		action: "sample.collected",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "[{{ repository.name }}:{{ repository.default_branch }}] `repository_dispatch` (`sample.collected`)",
			url: "{{ repository.html_url }}",
			color: color("black")
		}]
	}
]

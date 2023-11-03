const color = require("../util/color.js")

module.exports = [
	{
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}",
				url: "{{ sender.html_url }}"
			},
			title: "[{{ repository.name }}] {{ count(commits) }} new commit(s)",
			url: "{{ compare }}",
			color: color("gray")
		}]
	}
]

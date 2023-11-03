const color = require("../util/color.js")

module.exports = [
	{
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "[{{ repository.name }}:{{ base_ref }}] {{ count(commits) }} new commit(s)",
			url: "{{ compare }}",
			color: color("black")
		}]
	}
]

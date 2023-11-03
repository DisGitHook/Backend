const color = require("../util/color.js")

module.exports = [
	{
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "[{{ repository.name }}:{{ head_commit.tree_id }}] {{ count(commits) }} new commit(s)",
			url: "{{ compare }}",
			color: color("gray")
		}]
	}
]

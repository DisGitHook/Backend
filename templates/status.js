const color = require("../util/color.js")

module.exports = [
	{
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "[{{ repository.name }}:{{ repository.default_branch }}] Status of commit changed to {{ state }}",
			url: "{{ target_url || commit.commit.tree.url }}",
			color: color("black")
		}]
	}
]

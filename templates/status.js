const color = require("../util/color.js")

module.exports = [
	{
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}",
				url: "{{ sender.html_url }}"
			},
			title: "[{{ repository.name }}] Status of commit changed to {{ state }}",
			url: "{{ target_url || commit.commit.tree.url }}",
			color: color("black")
		}]
	}
]

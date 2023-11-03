const color = require("../util/color.js")

module.exports = [
	{
		action: "revoked",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "[[{{ repository.name }}]({{ repository.html_url }}):{{ repository.default_branch }}] `github_app_authorization` (`revoked`)",
			color: color("black")
		}]
	}
]

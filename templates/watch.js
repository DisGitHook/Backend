const color = require("../util/color.js")

module.exports = [
	{
		action: "started",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`watch` (`started`)",
			color: color("black")
		}]
	}
]

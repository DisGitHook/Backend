const color = require("../util/color.js")

module.exports = [
	{
		action: "resolved",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`pull_request_review_thread` (`resolved`)",
			color: color("green")
		}]
	},{
		action: "unresolved",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`pull_request_review_thread` (`unresolved`)",
			color: color("black")
		}]
	}
]

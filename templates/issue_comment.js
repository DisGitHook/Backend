const color = require("../util/color.js")

module.exports = [
	{
		action: "created",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "[[{{ repository.name }}]({{ repository.html_url }}):{{ repository.default_branch }}] `issue_comment` (`created`)",
			color: color("green")
		}]
	},{
		action: "deleted",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "[[{{ repository.name }}]({{ repository.html_url }}):{{ repository.default_branch }}] `issue_comment` (`deleted`)",
			color: color("red")
		}]
	},{
		action: "edited",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "[[{{ repository.name }}]({{ repository.html_url }}):{{ repository.default_branch }}] `issue_comment` (`edited`)",
			color: color("cyan")
		}]
	}
]

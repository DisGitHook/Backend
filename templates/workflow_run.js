const color = require("../util/color.js")

module.exports = [
	{
		action: "completed",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "[[{{ repository.name }}]({{ repository.html_url }}):{{ repository.default_branch }}] `workflow_run` (`completed`)",
			color: color("black")
		}]
	},{
		action: "in_progress",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "[[{{ repository.name }}]({{ repository.html_url }}):{{ repository.default_branch }}] `workflow_run` (`in_progress`)",
			color: color("black")
		}]
	},{
		action: "requested",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "[[{{ repository.name }}]({{ repository.html_url }}):{{ repository.default_branch }}] `workflow_run` (`requested`)",
			color: color("black")
		}]
	}
]

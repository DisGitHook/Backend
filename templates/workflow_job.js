const color = require("../util/color.js")

module.exports = [
	{
		action: "completed",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "[{{ repository.name }}] Workflow **{{ workflow.name }}** {{ workflow_run.conclusion }}",
			url: "{{ workflow_run.html_url }}",
			color: color("black")
		}]
	},{
		action: "in_progress",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "[{{ repository.name }}] Workflow **{{ workflow.name }}** {{ workflow_run.status }}",
			url: "{{ workflow_run.html_url }}",
			color: color("black")
		}]
	},{
		action: "queued",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "[{{ repository.name }}] Workflow **{{ workflow.name }}** queued",
			url: "{{ workflow_run.html_url }}",
			color: color("gray")
		}]
	},{
		action: "waiting",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "[{{ repository.name }}] Workflow **{{ workflow.name }}** waiting",
			url: "{{ workflow_run.html_url }}",
			color: color("gray")
		}]
	}
]

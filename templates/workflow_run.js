const color = require("../util/color.js")

module.exports = [
	{
		action: "completed",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "[{{ workflow_run.head_repository.name }}:{{ workflow_run.head_branch }}] Workflow **{{ workflow.name }}** finished",
			url: "{{ workflow_run.html_url }}",
			description: "{{ workflow_run.conclusion }}",
			image: {
				url: "{{ workflow_run.badge_url }}"
			},
			color: color("green")
		}]
	},{
		action: "in_progress",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "[{{ workflow_run.head_repository.name }}:{{ workflow_run.head_branch }}] Workflow **{{ workflow.name }}** started",
			url: "{{ workflow_run.html_url }}",
			description: "Cancel URL: {{ workflow_run.cancel_url }}",
			image: {
				url: "{{ workflow_run.badge_url }}"
			},
			color: color("black")
		}]
	},{
		action: "requested",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "[{{ workflow_run.head_repository.name }}:{{ workflow_run.head_branch }}] Workflow **{{ workflow.name }}** requested",
			url: "{{ workflow_run.html_url }}",
			color: color("black")
		}]
	}
]

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
			color: color("magenta")
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
			color: color("yellow")
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

const color = require("../util/color.js")

module.exports = [
	{
		action: "completed",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "[{{ repository.name }}] Workflow **{{ workflow.name }}** {{ workflow_job.conclusion }}",
			url: "{{ workflow_job.html_url }}",
			color: color("black")
		}]
	},{
		action: "in_progress",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "[{{ repository.name }}] Workflow **{{ workflow.name }}** {{ workflow_job.status }}",
			url: "{{ workflow_job.html_url }}",
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
			url: "{{ workflow_job.html_url }}",
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
			url: "{{ workflow_job.html_url }}",
			color: color("gray")
		}]
	}
]

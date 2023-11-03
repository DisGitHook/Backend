const color = require("../util/color.js")

module.exports = [
	{
		action: "completed",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}",
				url: "{{ sender.html_url }}"
			},
			title: "[{{ repository.name }}] Workflow **{{ workflow_job.name }}** {{ workflow_job.conclusion }}",
			url: "{{ workflow_job.html_url }}",
			color: color("magenta")
		}]
	},{
		action: "in_progress",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}",
				url: "{{ sender.html_url }}"
			},
			title: "[{{ repository.name }}] Workflow **{{ workflow_job.name }}** {{ workflow_job.status }}",
			url: "{{ workflow_job.html_url }}",
			color: color("yellow")
		}]
	},{
		action: "queued",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}",
				url: "{{ sender.html_url }}"
			},
			title: "[{{ repository.name }}] Workflow **{{ workflow_job.name }}** queued",
			url: "{{ workflow_job.html_url }}",
			color: color("gray")
		}]
	},{
		action: "waiting",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}",
				url: "{{ sender.html_url }}"
			},
			title: "[{{ repository.name }}] Workflow **{{ workflow_job.name }}** waiting",
			url: "{{ workflow_job.html_url }}",
			color: color("gray")
		}]
	}
]

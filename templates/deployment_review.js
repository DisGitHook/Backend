const color = require("../util/color.js")

module.exports = [
	{
		action: "approved",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}",
				url: "{{ sender.html_url }}"
			},
			title: "[{{ repository.name }}:{{ workflow_run.head_branch }}] Deployment review approved {{ workflow_run.conclusion }}",
			url: "{{ workflow_run.html_url }}",
			description: "{{ comment }}",
			color: color("green")
		}]
	},{
		action: "rejected",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}",
				url: "{{ sender.html_url }}"
			},
			title: "[{{ repository.name }}:{{ workflow_run.head_branch }}] Deployment review rejected {{ workflow_run.conclusion }}",
			url: "{{ workflow_run.html_url }}",
			color: color("red")
		}]
	},{
		action: "requested",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}",
				url: "{{ sender.html_url }}"
			},
			title: "[{{ repository.name }}:{{ workflow_run.head_branch }}] Deployment review requested {{ workflow_run.conclusion }}",
			url: "{{ workflow_run.html_url }}",
			color: color("gray")
		}]
	}
]

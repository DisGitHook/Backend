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
			title: "[{{ repository.name }}] **{{ check_run.name }}** check run {{ check_run.conclusion }}",
			url: "{{ check_run.html_url }}",
			description: "{{ check_run.output.title }}\n\n{{ check_run.output.summary }}\n\n{{ check_run.output.text }}",
			color: color("magenta")
		}]
	},{
		action: "created",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}",
				url: "{{ sender.html_url }}"
			},
			title: "[{{ repository.name }}] **{{ check_run.name }}** check run {{ check_run.status }}",
			url: "{{ check_run.html_url }}",
			color: color("green")
		}]
	}
]

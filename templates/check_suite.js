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
			title: "[{{ repository.name }}] **{{ check_suite.latest_check_runs_count }}** check runs completed {{ check_suite.conclusion }}",
			url: "{{ repository.html_url }}",
			color: color("magenta")
		}]
	}
]

const color = require("../util/color.js")

module.exports = [
	{
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "[{{ repository.name }}] Code Security features edited",
			url: "{{ repository.html_url }}",
			description:
				"Code scanning: {{ repository.security_and_analysis.code_scanning_enabled ? Enabled : Disabled }}\n" +
				"Secret scanning: {{ repository.security_and_analysis.secret_scanning_enabled ? Enabled : Disabled }}\n" +
				"Dependabot alerts: {{ repository.security_and_analysis.dependabot_alerts_enabled ? Enabled : Disabled }}\n" +
				"Dependabot security updates: {{ repository.security_and_analysis.dependabot_security_updates_enabled ? Enabled : Disabled }}",
			color: color("cyan")
		}]
	}
]

const color = require("../util/color.js")

module.exports = [
	{
		action: "published",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}",
				url: "{{ sender.html_url }}"
			},
			title: "[{{ repository.name }}] Security advisory published",
			url: "https://github.com/advisories/{{ security_advisory.ghsa_id }}",
			description: "{{ security_advisory.summary }}",
			color: color("red")
		}]
	},{
		action: "updated",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}",
				url: "{{ sender.html_url }}"
			},
			title: "[{{ repository.name }}] Security advisory updated",
			url: "https://github.com/advisories/{{ security_advisory.ghsa_id }}",
			description: "{{ security_advisory.summary }}",
			color: color("cyan")
		}]
	},{
		action: "withdrawn",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}",
				url: "{{ sender.html_url }}"
			},
			title: "[{{ repository.name }}] Security advisory withdrawn",
			url: "https://github.com/advisories/{{ security_advisory.ghsa_id }}",
			description: "{{ security_advisory.summary }}",
			color: color("green")
		}]
	}
]

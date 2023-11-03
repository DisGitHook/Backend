const color = require("../util/color.js")

module.exports = [
	{
		action: "published",
		embeds: [{
			author: {
				name: "{{ publisher.login }}",
				icon_url: "{{ publisher.avatar_url }}",
				url: "{{ publisher.html_url }}"
			},
			title: "[{{ repository.name }}] {{ repository_advisory.severity }} repository advisory published (CVE {{ repository_advisory.cve_id }})",
			url: "{{ repository_advisory.html_url }}",
			description: "{{ repository_advisory.summary }}",
			color: color("red")
		}]
	},{
		action: "reported",
		embeds: [{
			author: {
				name: "{{ publisher.login }}",
				icon_url: "{{ publisher.avatar_url }}",
				url: "{{ publisher.html_url }}"
			},
			title: "[{{ repository.name }}] Repository advisory reported (CVE {{ repository_advisory.cve_id }})",
			url: "{{ repository_advisory.html_url }}",
			description: "{{ repository_advisory.summary }}",
			color: color("red")
		}]
	}
]

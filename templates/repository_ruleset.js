const color = require("../util/color.js")

module.exports = [
	{
		action: "created",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}",
				url: "{{ sender.html_url }}"
			},
			title: "[{{ repository.name }}] Ruleset **{{ repository_ruleset.name }}** targeting {{ repository_ruleset.target }} created",
			url: "{{ repository_ruleset._links.html.href }}/settings/rules",
			color: color("green")
		}]
	},{
		action: "deleted",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}",
				url: "{{ sender.html_url }}"
			},
			title: "[{{ repository.name }}] Ruleset **{{ repository_ruleset.name }}** deleted",
			url: "{{ repository_ruleset._links.html.href }}/settings/rules",
			color: color("red")
		}]
	},{
		action: "edited",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}",
				url: "{{ sender.html_url }}"
			},
			title: "[{{ repository.name }}] Ruleset **{{ repository_ruleset.name }}** edited",
			url: "{{ repository_ruleset._links.html.href }}/settings/rules",
			color: color("cyan")
		}]
	}
]

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
			title: "[{{ repository.name }}] Branch protection rule **{{ branch_protection_rule.name }}** created",
			url: "{{ repository.html_url }}",
			color: color("green")
		}]
	},{
		action: "edited",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}",
				url: "{{ sender.html_url }}"
			},
			title: "[{{ repository.name }}] Branch protection rule **{{ branch_protection_rule.name }}** edited",
			url: "{{ repository.html_url }}",
			color: color("cyan")
		}]
	},{
		action: "deleted",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}",
				url: "{{ sender.html_url }}"
			},
			title: "[{{ repository.name }}] Branch protection rule **{{ branch_protection_rule.name }}** deleted",
			url: "{{ repository.html_url }}",
			color: color("red")
		}]
	}
]

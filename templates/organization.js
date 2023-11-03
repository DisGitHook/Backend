const color = require("../util/color.js")

module.exports = [
	{
		action: "deleted",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "[{{ repository.name }}:{{ repository.default_branch }}] `organization` (`deleted`)",
			url: "{{ repository.html_url }}",
			color: color("red")
		}]
	},{
		action: "member_added",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "[{{ repository.name }}:{{ repository.default_branch }}] `organization` (`member_added`)",
			url: "{{ repository.html_url }}",
			color: color("black")
		}]
	},{
		action: "member_invited",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "[{{ repository.name }}:{{ repository.default_branch }}] `organization` (`member_invited`)",
			url: "{{ repository.html_url }}",
			color: color("black")
		}]
	},{
		action: "member_removed",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "[{{ repository.name }}:{{ repository.default_branch }}] `organization` (`member_removed`)",
			url: "{{ repository.html_url }}",
			color: color("black")
		}]
	},{
		action: "renamed",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "[{{ repository.name }}:{{ repository.default_branch }}] `organization` (`renamed`)",
			url: "{{ repository.html_url }}",
			color: color("black")
		}]
	}
]

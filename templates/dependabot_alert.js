const color = require("../util/color.js")

module.exports = [
	{
		action: "auto_dismissed",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "[{{ repository.name }}:{{ repository.default_branch }}] `dependabot_alert` (`auto_dismissed`)",
			url: "{{ repository.html_url }}",
			color: color("black")
		}]
	},{
		action: "auto_reopened",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "[{{ repository.name }}:{{ repository.default_branch }}] `dependabot_alert` (`auto_reopened`)",
			url: "{{ repository.html_url }}",
			color: color("black")
		}]
	},{
		action: "created",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "[{{ repository.name }}:{{ repository.default_branch }}] `dependabot_alert` (`created`)",
			url: "{{ repository.html_url }}",
			color: color("green")
		}]
	},{
		action: "dismissed",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "[{{ repository.name }}:{{ repository.default_branch }}] `dependabot_alert` (`dismissed`)",
			url: "{{ repository.html_url }}",
			color: color("black")
		}]
	},{
		action: "fixed",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "[{{ repository.name }}:{{ repository.default_branch }}] `dependabot_alert` (`fixed`)",
			url: "{{ repository.html_url }}",
			color: color("black")
		}]
	},{
		action: "reintroduced",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "[{{ repository.name }}:{{ repository.default_branch }}] `dependabot_alert` (`reintroduced`)",
			url: "{{ repository.html_url }}",
			color: color("black")
		}]
	},{
		action: "reopened",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "[{{ repository.name }}:{{ repository.default_branch }}] `dependabot_alert` (`reopened`)",
			url: "{{ repository.html_url }}",
			color: color("black")
		}]
	}
]

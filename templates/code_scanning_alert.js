const color = require("../util/color.js")

module.exports = [
	{
		action: "appeared_in_branch",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "[{{ repository.name }}:{{ repository.default_branch }}] `code_scanning_alert` (`appeared_in_branch`)",
			url: "{{ repository.html_url }}",
			color: color("black")
		}]
	},{
		action: "closed_by_user",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "[{{ repository.name }}:{{ repository.default_branch }}] `code_scanning_alert` (`closed_by_user`)",
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
			title: "[{{ repository.name }}:{{ repository.default_branch }}] `code_scanning_alert` (`created`)",
			url: "{{ repository.html_url }}",
			color: color("green")
		}]
	},{
		action: "fixed",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "[{{ repository.name }}:{{ repository.default_branch }}] `code_scanning_alert` (`fixed`)",
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
			title: "[{{ repository.name }}:{{ repository.default_branch }}] `code_scanning_alert` (`reopened`)",
			url: "{{ repository.html_url }}",
			color: color("black")
		}]
	},{
		action: "reopened_by_user",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "[{{ repository.name }}:{{ repository.default_branch }}] `code_scanning_alert` (`reopened_by_user`)",
			url: "{{ repository.html_url }}",
			color: color("black")
		}]
	}
]

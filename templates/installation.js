const color = require("../util/color.js")

module.exports = [
	{
		action: "created",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "[{{ repository.name }}:{{ repository.default_branch }}] `installation` (`created`)",
			url: "{{ repository.html_url }}",
			color: color("green")
		}]
	},{
		action: "deleted",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "[{{ repository.name }}:{{ repository.default_branch }}] `installation` (`deleted`)",
			url: "{{ repository.html_url }}",
			color: color("red")
		}]
	},{
		action: "new_permissions_accepted",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "[{{ repository.name }}:{{ repository.default_branch }}] `installation` (`new_permissions_accepted`)",
			url: "{{ repository.html_url }}",
			color: color("black")
		}]
	},{
		action: "suspend",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "[{{ repository.name }}:{{ repository.default_branch }}] `installation` (`suspend`)",
			url: "{{ repository.html_url }}",
			color: color("black")
		}]
	},{
		action: "unsuspend",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "[{{ repository.name }}:{{ repository.default_branch }}] `installation` (`unsuspend`)",
			url: "{{ repository.html_url }}",
			color: color("black")
		}]
	}
]

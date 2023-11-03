const color = require("../util/color.js")

module.exports = [
	{
		action: "cancelled",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "[{{ repository.name }}:{{ repository.default_branch }}] `marketplace_purchase` (`cancelled`)",
			url: "{{ repository.html_url }}",
			color: color("red")
		}]
	},{
		action: "changed",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "[{{ repository.name }}:{{ repository.default_branch }}] `marketplace_purchase` (`changed`)",
			url: "{{ repository.html_url }}",
			color: color("black")
		}]
	},{
		action: "pending_change",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "[{{ repository.name }}:{{ repository.default_branch }}] `marketplace_purchase` (`pending_change`)",
			url: "{{ repository.html_url }}",
			color: color("black")
		}]
	},{
		action: "pending_change_cancelled",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "[{{ repository.name }}:{{ repository.default_branch }}] `marketplace_purchase` (`pending_change_cancelled`)",
			url: "{{ repository.html_url }}",
			color: color("black")
		}]
	},{
		action: "purchased",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "[{{ repository.name }}:{{ repository.default_branch }}] `marketplace_purchase` (`purchased`)",
			url: "{{ repository.html_url }}",
			color: color("black")
		}]
	}
]

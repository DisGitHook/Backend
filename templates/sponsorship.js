const color = require("../util/color.js")

module.exports = [
	{
		action: "cancelled",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "[{{ repository.name }}:{{ repository.default_branch }}] `sponsorship` (`cancelled`)",
			url: "{{ repository.html_url }}",
			color: color("red")
		}]
	},{
		action: "created",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "[{{ repository.name }}:{{ repository.default_branch }}] `sponsorship` (`created`)",
			url: "{{ repository.html_url }}",
			color: color("green")
		}]
	},{
		action: "edited",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "[{{ repository.name }}:{{ repository.default_branch }}] `sponsorship` (`edited`)",
			url: "{{ repository.html_url }}",
			color: color("cyan")
		}]
	},{
		action: "pending_cancellation",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "[{{ repository.name }}:{{ repository.default_branch }}] `sponsorship` (`pending_cancellation`)",
			url: "{{ repository.html_url }}",
			color: color("black")
		}]
	},{
		action: "pending_tier_change",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "[{{ repository.name }}:{{ repository.default_branch }}] `sponsorship` (`pending_tier_change`)",
			url: "{{ repository.html_url }}",
			color: color("black")
		}]
	},{
		action: "tier_changed",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "[{{ repository.name }}:{{ repository.default_branch }}] `sponsorship` (`tier_changed`)",
			url: "{{ repository.html_url }}",
			color: color("black")
		}]
	}
]

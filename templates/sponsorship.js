const color = require("../util/color.js")

module.exports = [
	{
		action: "cancelled",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "[[{{ repository.name }}]({{ repository.html_url }}):{{ repository.default_branch }}] `sponsorship` (`cancelled`)",
			color: color("black")
		}]
	},{
		action: "created",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "[[{{ repository.name }}]({{ repository.html_url }}):{{ repository.default_branch }}] `sponsorship` (`created`)",
			color: color("green")
		}]
	},{
		action: "edited",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "[[{{ repository.name }}]({{ repository.html_url }}):{{ repository.default_branch }}] `sponsorship` (`edited`)",
			color: color("cyan")
		}]
	},{
		action: "pending_cancellation",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "[[{{ repository.name }}]({{ repository.html_url }}):{{ repository.default_branch }}] `sponsorship` (`pending_cancellation`)",
			color: color("black")
		}]
	},{
		action: "pending_tier_change",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "[[{{ repository.name }}]({{ repository.html_url }}):{{ repository.default_branch }}] `sponsorship` (`pending_tier_change`)",
			color: color("black")
		}]
	},{
		action: "tier_changed",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "[[{{ repository.name }}]({{ repository.html_url }}):{{ repository.default_branch }}] `sponsorship` (`tier_changed`)",
			color: color("black")
		}]
	}
]

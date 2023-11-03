const color = require("../util/color.js")

module.exports = [
	{
		action: "cancelled",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`sponsorship` (`cancelled`)",
			color: color("black")
		}]
	},{
		action: "created",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`sponsorship` (`created`)",
			color: color("green")
		}]
	},{
		action: "edited",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`sponsorship` (`edited`)",
			color: color("black")
		}]
	},{
		action: "pending_cancellation",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`sponsorship` (`pending_cancellation`)",
			color: color("black")
		}]
	},{
		action: "pending_tier_change",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`sponsorship` (`pending_tier_change`)",
			color: color("black")
		}]
	},{
		action: "tier_changed",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`sponsorship` (`tier_changed`)",
			color: color("black")
		}]
	}
]

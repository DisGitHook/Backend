const color = require("../util/color.js")

module.exports = [
	{
		action: "cancelled",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`marketplace_purchase` (`cancelled`)",
			color: color("black")
		}]
	},{
		action: "changed",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`marketplace_purchase` (`changed`)",
			color: color("black")
		}]
	},{
		action: "pending_change",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`marketplace_purchase` (`pending_change`)",
			color: color("black")
		}]
	},{
		action: "pending_change_cancelled",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`marketplace_purchase` (`pending_change_cancelled`)",
			color: color("black")
		}]
	},{
		action: "purchased",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`marketplace_purchase` (`purchased`)",
			color: color("black")
		}]
	}
]

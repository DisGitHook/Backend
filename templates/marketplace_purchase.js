const color = require("../util/color.js")

module.exports = [
	{
		action: "cancelled",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}",
				url: "{{ sender.html_url }}"
			},
			title: "[{{ marketplace_purchase.plan.name }}] Marketplace plan cancelled",
			color: color("red")
		}]
	},{
		action: "changed",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}",
				url: "{{ sender.html_url }}"
			},
			title: "[{{ marketplace_purchase.plan.name }}] Marketplace plan changed",
			color: color("cyan")
		}]
	},{
		action: "pending_change",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}",
				url: "{{ sender.html_url }}"
			},
			title: "[{{ marketplace_purchase.plan.name }}] Pending marketplace plan change",
			color: color("gray")
		}]
	},{
		action: "pending_change_cancelled",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}",
				url: "{{ sender.html_url }}"
			},
			title: "[{{ marketplace_purchase.plan.name }}] Pending marketplace plan change cancelled",
			color: color("gray")
		}]
	},{
		action: "purchased",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}",
				url: "{{ sender.html_url }}"
			},
			title: "[{{ marketplace_purchase.plan.name }}] Plan purchased",
			color: color("green")
		}]
	}
]

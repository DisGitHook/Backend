const color = require("../util/color.js")

module.exports = [
	{
		action: "cancelled",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "[{{ sponsorship.maintainer.login || sponsorship.sponsorable.login }}] Recurring sponsorship cancelled",
			url: "{{ sponsorship.maintainer.html_url }}",
			color: color("red")
		}]
	},{
		action: "created",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "[{{ sponsorship.maintainer.login || sponsorship.sponsorable.login }}] New sponsor",
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
			title: "[{{ sponsorship.maintainer.login || sponsorship.sponsorable.login }}] Sponsorship edited",
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
			title: "[{{ sponsorship.maintainer.login || sponsorship.sponsorable.login }}] Sponsorship will end",
			url: "{{ repository.html_url }}",
			color: color("gray")
		}]
	},{
		action: "pending_tier_change",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "[{{ sponsorship.maintainer.login || sponsorship.sponsorable.login }}] Sponsorship tier will change to **{{ sponsorship.tier.name }}**",
			url: "{{ repository.html_url }}",
			color: color("gray")
		}]
	},{
		action: "tier_changed",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "[{{ sponsorship.maintainer.login || sponsorship.sponsorable.login }}] Sponsorship tier changed to **{{ sponsorship.tier.name }}**",
			url: "{{ repository.html_url }}",
			color: color("cyan")
		}]
	}
]

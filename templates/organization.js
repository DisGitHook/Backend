const color = require("../util/color.js")

module.exports = [
	{
		action: "deleted",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`organization` (`deleted`)",
			color: color("red")
		}]
	},{
		action: "member_added",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`organization` (`member_added`)",
			color: color("black")
		}]
	},{
		action: "member_invited",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`organization` (`member_invited`)",
			color: color("black")
		}]
	},{
		action: "member_removed",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`organization` (`member_removed`)",
			color: color("black")
		}]
	},{
		action: "renamed",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`organization` (`renamed`)",
			color: color("black")
		}]
	}
]

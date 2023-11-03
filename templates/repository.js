const color = require("../util/color.js")

module.exports = [
	{
		action: "archived",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`repository` (`archived`)",
			color: color("black")
		}]
	},{
		action: "created",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`repository` (`created`)",
			color: color("green")
		}]
	},{
		action: "deleted",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`repository` (`deleted`)",
			color: color("red")
		}]
	},{
		action: "edited",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`repository` (`edited`)",
			color: color("black")
		}]
	},{
		action: "privatized",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`repository` (`privatized`)",
			color: color("black")
		}]
	},{
		action: "publicized",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`repository` (`publicized`)",
			color: color("black")
		}]
	},{
		action: "renamed",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`repository` (`renamed`)",
			color: color("black")
		}]
	},{
		action: "transferred",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`repository` (`transferred`)",
			color: color("black")
		}]
	},{
		action: "unarchived",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`repository` (`unarchived`)",
			color: color("black")
		}]
	}
]

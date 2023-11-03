const color = require("../util/color.js")

module.exports = [
	{
		action: "archived",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`projects_v2_item` (`archived`)",
			color: color("black")
		}]
	},{
		action: "converted",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`projects_v2_item` (`converted`)",
			color: color("black")
		}]
	},{
		action: "created",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "Item created on project board",
			color: color("green")
		}]
	},{
		action: "deleted",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "Item deleted from project board",
			color: color("red")
		}]
	},{
		action: "edited",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "Item edited on project board",
			color: color("cyan")
		}]
	},{
		action: "reordered",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "Item reordered on project board",
			color: color("magenta")
		}]
	},{
		action: "restored",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "Item restored on project board",
			color: color("darkGreen")
		}]
	}
]

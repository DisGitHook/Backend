const color = require("../util/color.js")

module.exports = [
	{
		action: "assigned",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`issues` (`assigned`)",
			color: color("black")
		}]
	},{
		action: "closed",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`issues` (`closed`)",
			color: color("black")
		}]
	},{
		action: "deleted",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`issues` (`deleted`)",
			color: color("red")
		}]
	},{
		action: "demilestoned",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`issues` (`demilestoned`)",
			color: color("black")
		}]
	},{
		action: "edited",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`issues` (`edited`)",
			color: color("black")
		}]
	},{
		action: "labeled",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`issues` (`labeled`)",
			color: color("black")
		}]
	},{
		action: "locked",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`issues` (`locked`)",
			color: color("black")
		}]
	},{
		action: "milestoned",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`issues` (`milestoned`)",
			color: color("black")
		}]
	},{
		action: "opened",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`issues` (`opened`)",
			color: color("black")
		}]
	},{
		action: "pinned",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`issues` (`pinned`)",
			color: color("black")
		}]
	},{
		action: "reopened",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`issues` (`reopened`)",
			color: color("black")
		}]
	},{
		action: "transferred",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`issues` (`transferred`)",
			color: color("black")
		}]
	},{
		action: "unassigned",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`issues` (`unassigned`)",
			color: color("black")
		}]
	},{
		action: "unlabeled",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`issues` (`unlabeled`)",
			color: color("black")
		}]
	},{
		action: "unlocked",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`issues` (`unlocked`)",
			color: color("black")
		}]
	},{
		action: "unpinned",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`issues` (`unpinned`)",
			color: color("black")
		}]
	}
]

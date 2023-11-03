const color = require("../util/color.js")

module.exports = [
	{
		action: "assigned",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`pull_request` (`assigned`)",
			color: color("black")
		}]
	},{
		action: "auto_merge_disabled",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`pull_request` (`auto_merge_disabled`)",
			color: color("black")
		}]
	},{
		action: "auto_merge_enabled",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`pull_request` (`auto_merge_enabled`)",
			color: color("black")
		}]
	},{
		action: "closed",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`pull_request` (`closed`)",
			color: color("black")
		}]
	},{
		action: "converted_to_draft",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`pull_request` (`converted_to_draft`)",
			color: color("black")
		}]
	},{
		action: "demilestoned",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`pull_request` (`demilestoned`)",
			color: color("black")
		}]
	},{
		action: "dequeued",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`pull_request` (`dequeued`)",
			color: color("black")
		}]
	},{
		action: "edited",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`pull_request` (`edited`)",
			color: color("black")
		}]
	},{
		action: "enqueued",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`pull_request` (`enqueued`)",
			color: color("black")
		}]
	},{
		action: "labeled",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`pull_request` (`labeled`)",
			color: color("black")
		}]
	},{
		action: "locked",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`pull_request` (`locked`)",
			color: color("black")
		}]
	},{
		action: "milestoned",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`pull_request` (`milestoned`)",
			color: color("black")
		}]
	},{
		action: "opened",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`pull_request` (`opened`)",
			color: color("black")
		}]
	},{
		action: "ready_for_review",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`pull_request` (`ready_for_review`)",
			color: color("black")
		}]
	},{
		action: "reopened",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`pull_request` (`reopened`)",
			color: color("black")
		}]
	},{
		action: "review_request_removed",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`pull_request` (`review_request_removed`)",
			color: color("black")
		}]
	},{
		action: "review_requested",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`pull_request` (`review_requested`)",
			color: color("black")
		}]
	},{
		action: "synchronize",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`pull_request` (`synchronize`)",
			color: color("black")
		}]
	},{
		action: "unassigned",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`pull_request` (`unassigned`)",
			color: color("black")
		}]
	},{
		action: "unlabeled",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`pull_request` (`unlabeled`)",
			color: color("black")
		}]
	},{
		action: "unlocked",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`pull_request` (`unlocked`)",
			color: color("black")
		}]
	}
]

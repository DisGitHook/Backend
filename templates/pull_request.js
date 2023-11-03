const color = require("../util/color.js")

module.exports = [
	{
		action: "assigned",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}",
				url: "{{ sender.html_url }}"
			},
			title: "[{{ repository.name }}] `pull_request` (`assigned`)",
			url: "{{ repository.html_url }}",
			color: color("black")
		}]
	},{
		action: "auto_merge_disabled",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}",
				url: "{{ sender.html_url }}"
			},
			title: "[{{ repository.name }}] `pull_request` (`auto_merge_disabled`)",
			url: "{{ repository.html_url }}",
			color: color("black")
		}]
	},{
		action: "auto_merge_enabled",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}",
				url: "{{ sender.html_url }}"
			},
			title: "[{{ repository.name }}] `pull_request` (`auto_merge_enabled`)",
			url: "{{ repository.html_url }}",
			color: color("black")
		}]
	},{
		action: "closed",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}",
				url: "{{ sender.html_url }}"
			},
			title: "[{{ repository.name }}] `pull_request` (`closed`)",
			url: "{{ repository.html_url }}",
			color: color("black")
		}]
	},{
		action: "converted_to_draft",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}",
				url: "{{ sender.html_url }}"
			},
			title: "[{{ repository.name }}] `pull_request` (`converted_to_draft`)",
			url: "{{ repository.html_url }}",
			color: color("black")
		}]
	},{
		action: "demilestoned",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}",
				url: "{{ sender.html_url }}"
			},
			title: "[{{ repository.name }}] `pull_request` (`demilestoned`)",
			url: "{{ repository.html_url }}",
			color: color("black")
		}]
	},{
		action: "dequeued",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}",
				url: "{{ sender.html_url }}"
			},
			title: "[{{ repository.name }}] `pull_request` (`dequeued`)",
			url: "{{ repository.html_url }}",
			color: color("black")
		}]
	},{
		action: "edited",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}",
				url: "{{ sender.html_url }}"
			},
			title: "[{{ repository.name }}] `pull_request` (`edited`)",
			url: "{{ repository.html_url }}",
			color: color("cyan")
		}]
	},{
		action: "enqueued",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}",
				url: "{{ sender.html_url }}"
			},
			title: "[{{ repository.name }}] `pull_request` (`enqueued`)",
			url: "{{ repository.html_url }}",
			color: color("black")
		}]
	},{
		action: "labeled",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}",
				url: "{{ sender.html_url }}"
			},
			title: "[{{ repository.name }}] `pull_request` (`labeled`)",
			url: "{{ repository.html_url }}",
			color: color("cyan")
		}]
	},{
		action: "locked",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}",
				url: "{{ sender.html_url }}"
			},
			title: "[{{ repository.name }}] `pull_request` (`locked`)",
			url: "{{ repository.html_url }}",
			color: color("gray")
		}]
	},{
		action: "milestoned",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}",
				url: "{{ sender.html_url }}"
			},
			title: "[{{ repository.name }}] `pull_request` (`milestoned`)",
			url: "{{ repository.html_url }}",
			color: color("black")
		}]
	},{
		action: "opened",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}",
				url: "{{ sender.html_url }}"
			},
			title: "[{{ repository.name }}] `pull_request` (`opened`)",
			url: "{{ repository.html_url }}",
			color: color("black")
		}]
	},{
		action: "ready_for_review",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}",
				url: "{{ sender.html_url }}"
			},
			title: "[{{ repository.name }}] `pull_request` (`ready_for_review`)",
			url: "{{ repository.html_url }}",
			color: color("black")
		}]
	},{
		action: "reopened",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}",
				url: "{{ sender.html_url }}"
			},
			title: "[{{ repository.name }}] `pull_request` (`reopened`)",
			url: "{{ repository.html_url }}",
			color: color("black")
		}]
	},{
		action: "review_request_removed",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}",
				url: "{{ sender.html_url }}"
			},
			title: "[{{ repository.name }}] `pull_request` (`review_request_removed`)",
			url: "{{ repository.html_url }}",
			color: color("black")
		}]
	},{
		action: "review_requested",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}",
				url: "{{ sender.html_url }}"
			},
			title: "[{{ repository.name }}] `pull_request` (`review_requested`)",
			url: "{{ repository.html_url }}",
			color: color("black")
		}]
	},{
		action: "synchronize",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}",
				url: "{{ sender.html_url }}"
			},
			title: "[{{ repository.name }}] `pull_request` (`synchronize`)",
			url: "{{ repository.html_url }}",
			color: color("black")
		}]
	},{
		action: "unassigned",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}",
				url: "{{ sender.html_url }}"
			},
			title: "[{{ repository.name }}] `pull_request` (`unassigned`)",
			url: "{{ repository.html_url }}",
			color: color("black")
		}]
	},{
		action: "unlabeled",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}",
				url: "{{ sender.html_url }}"
			},
			title: "[{{ repository.name }}] `pull_request` (`unlabeled`)",
			url: "{{ repository.html_url }}",
			color: color("black")
		}]
	},{
		action: "unlocked",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}",
				url: "{{ sender.html_url }}"
			},
			title: "[{{ repository.name }}] `pull_request` (`unlocked`)",
			url: "{{ repository.html_url }}",
			color: color("black")
		}]
	}
]

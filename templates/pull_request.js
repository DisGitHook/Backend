module.exports = [
	{
		action: "assigned",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`pull_request` (`assigned`)",
			color: 0
		}]
	},
	{
		action: "auto_merge_disabled",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`pull_request` (`auto_merge_disabled`)",
			color: 0
		}]
	},
	{
		action: "auto_merge_enabled",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`pull_request` (`auto_merge_enabled`)",
			color: 0
		}]
	},
	{
		action: "closed",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`pull_request` (`closed`)",
			color: 0
		}]
	},
	{
		action: "converted_to_draft",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`pull_request` (`converted_to_draft`)",
			color: 0
		}]
	},
	{
		action: "demilestoned",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`pull_request` (`demilestoned`)",
			color: 0
		}]
	},
	{
		action: "dequeued",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`pull_request` (`dequeued`)",
			color: 0
		}]
	},
	{
		action: "edited",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`pull_request` (`edited`)",
			color: 0
		}]
	},
	{
		action: "enqueued",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`pull_request` (`enqueued`)",
			color: 0
		}]
	},
	{
		action: "labeled",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`pull_request` (`labeled`)",
			color: 0
		}]
	},
	{
		action: "locked",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`pull_request` (`locked`)",
			color: 0
		}]
	},
	{
		action: "milestoned",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`pull_request` (`milestoned`)",
			color: 0
		}]
	},
	{
		action: "opened",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`pull_request` (`opened`)",
			color: 0
		}]
	},
	{
		action: "ready_for_review",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`pull_request` (`ready_for_review`)",
			color: 0
		}]
	},
	{
		action: "reopened",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`pull_request` (`reopened`)",
			color: 0
		}]
	},
	{
		action: "review_request_removed",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`pull_request` (`review_request_removed`)",
			color: 0
		}]
	},
	{
		action: "review_requested",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`pull_request` (`review_requested`)",
			color: 0
		}]
	},
	{
		action: "synchronize",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`pull_request` (`synchronize`)",
			color: 0
		}]
	},
	{
		action: "unassigned",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`pull_request` (`unassigned`)",
			color: 0
		}]
	},
	{
		action: "unlabeled",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`pull_request` (`unlabeled`)",
			color: 0
		}]
	},
	{
		action: "unlocked",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`pull_request` (`unlocked`)",
			color: 0
		}]
	}]

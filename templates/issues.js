module.exports = [
	{
		action: "assigned",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`issues` (`assigned`)",
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
			title: "`issues` (`closed`)",
			color: 0
		}]
	},
	{
		action: "deleted",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`issues` (`deleted`)",
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
			title: "`issues` (`demilestoned`)",
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
			title: "`issues` (`edited`)",
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
			title: "`issues` (`labeled`)",
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
			title: "`issues` (`locked`)",
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
			title: "`issues` (`milestoned`)",
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
			title: "`issues` (`opened`)",
			color: 0
		}]
	},
	{
		action: "pinned",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`issues` (`pinned`)",
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
			title: "`issues` (`reopened`)",
			color: 0
		}]
	},
	{
		action: "transferred",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`issues` (`transferred`)",
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
			title: "`issues` (`unassigned`)",
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
			title: "`issues` (`unlabeled`)",
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
			title: "`issues` (`unlocked`)",
			color: 0
		}]
	},
	{
		action: "unpinned",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`issues` (`unpinned`)",
			color: 0
		}]
	}]

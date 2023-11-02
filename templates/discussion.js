module.exports = [
	{
		action: "answered",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`discussion` (`answered`)",
			color: 0
		}]
	},
	{
		action: "category_changed",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`discussion` (`category_changed`)",
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
			title: "`discussion` (`closed`)",
			color: 0
		}]
	},
	{
		action: "created",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`discussion` (`created`)",
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
			title: "`discussion` (`deleted`)",
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
			title: "`discussion` (`edited`)",
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
			title: "`discussion` (`labeled`)",
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
			title: "`discussion` (`locked`)",
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
			title: "`discussion` (`pinned`)",
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
			title: "`discussion` (`reopened`)",
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
			title: "`discussion` (`transferred`)",
			color: 0
		}]
	},
	{
		action: "unanswered",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`discussion` (`unanswered`)",
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
			title: "`discussion` (`unlabeled`)",
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
			title: "`discussion` (`unlocked`)",
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
			title: "`discussion` (`unpinned`)",
			color: 0
		}]
	}]

module.exports = [
	{
		action: "cancelled",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`sponsorship` (`cancelled`)",
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
			title: "`sponsorship` (`created`)",
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
			title: "`sponsorship` (`edited`)",
			color: 0
		}]
	},
	{
		action: "pending_cancellation",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`sponsorship` (`pending_cancellation`)",
			color: 0
		}]
	},
	{
		action: "pending_tier_change",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`sponsorship` (`pending_tier_change`)",
			color: 0
		}]
	},
	{
		action: "tier_changed",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`sponsorship` (`tier_changed`)",
			color: 0
		}]
	}]

module.exports = [
	{
		action: "cancelled",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`marketplace_purchase` (`cancelled`)",
			color: 0
		}]
	},
	{
		action: "changed",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`marketplace_purchase` (`changed`)",
			color: 0
		}]
	},
	{
		action: "pending_change",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`marketplace_purchase` (`pending_change`)",
			color: 0
		}]
	},
	{
		action: "pending_change_cancelled",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`marketplace_purchase` (`pending_change_cancelled`)",
			color: 0
		}]
	},
	{
		action: "purchased",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`marketplace_purchase` (`purchased`)",
			color: 0
		}]
	}]

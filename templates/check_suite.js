module.exports = [
	{
		action: "completed",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`check_suite` (`completed`)",
			color: 0
		}]
	},
	{
		action: "requested",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`check_suite` (`requested`)",
			color: 0
		}]
	},
	{
		action: "rerequested",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`check_suite` (`rerequested`)",
			color: 0
		}]
	}]

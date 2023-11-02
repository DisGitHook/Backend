module.exports = [
	{
		action: "completed",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`check_run` (`completed`)",
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
			title: "`check_run` (`created`)",
			color: 0
		}]
	},
	{
		action: "requested_action",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`check_run` (`requested_action`)",
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
			title: "`check_run` (`rerequested`)",
			color: 0
		}]
	}]

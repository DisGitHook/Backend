module.exports = [
	{
		action: "completed",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`workflow_run` (`completed`)",
			color: 0
		}]
	},
	{
		action: "in_progress",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`workflow_run` (`in_progress`)",
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
			title: "`workflow_run` (`requested`)",
			color: 0
		}]
	}]

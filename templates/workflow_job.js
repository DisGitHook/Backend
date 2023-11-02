module.exports = [
	{
		action: "completed",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`workflow_job` (`completed`)",
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
			title: "`workflow_job` (`in_progress`)",
			color: 0
		}]
	},
	{
		action: "queued",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`workflow_job` (`queued`)",
			color: 0
		}]
	},
	{
		action: "waiting",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`workflow_job` (`waiting`)",
			color: 0
		}]
	}]

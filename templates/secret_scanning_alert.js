module.exports = [
	{
		action: "created",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`secret_scanning_alert` (`created`)",
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
			title: "`secret_scanning_alert` (`reopened`)",
			color: 0
		}]
	},
	{
		action: "resolved",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`secret_scanning_alert` (`resolved`)",
			color: 0
		}]
	},
	{
		action: "revoked",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`secret_scanning_alert` (`revoked`)",
			color: 0
		}]
	}]

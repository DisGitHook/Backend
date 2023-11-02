module.exports = [
	{
		action: "approved",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`deployment_review` (`approved`)",
			color: 0
		}]
	},
	{
		action: "rejected",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`deployment_review` (`rejected`)",
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
			title: "`deployment_review` (`requested`)",
			color: 0
		}]
	}]

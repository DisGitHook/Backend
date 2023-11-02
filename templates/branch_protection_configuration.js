module.exports = [
	{
		action: "disabled",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`branch_protection_configuration` (`disabled`)",
			color: 0
		}]
	},
	{
		action: "enabled",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`branch_protection_configuration` (`enabled`)",
			color: 0
		}]
	}]

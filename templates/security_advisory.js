module.exports = [
	{
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`security_advisory` (`published`)",
			color: 0
		}]
	},
	{
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`security_advisory` (`updated`)",
			color: 0
		}]
	},
	{
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`security_advisory` (`withdrawn`)",
			color: 0
		}]
	}]

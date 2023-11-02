module.exports = [
	{
		action: "published",
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
		action: "updated",
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
		action: "withdrawn",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`security_advisory` (`withdrawn`)",
			color: 0
		}]
	}]

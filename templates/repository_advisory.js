module.exports = [
	{
		action: "published",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`repository_advisory` (`published`)",
			color: 0
		}]
	},
	{
		action: "reported",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`repository_advisory` (`reported`)",
			color: 0
		}]
	}]

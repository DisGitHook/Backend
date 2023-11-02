module.exports = [
	{
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`secret_scanning_alert_location` (`created`)",
			color: 0
		}]
	}]

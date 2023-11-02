module.exports = [
	{
		action: "approved",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`personal_access_token_request` (`approved`)",
			color: 0
		}]
	},
	{
		action: "cancelled",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`personal_access_token_request` (`cancelled`)",
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
			title: "`personal_access_token_request` (`created`)",
			color: 0
		}]
	},
	{
		action: "denied",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`personal_access_token_request` (`denied`)",
			color: 0
		}]
	}]

module.exports = [
	{
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`installation` (`created`)",
			color: 0
		}]
	},
	{
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`installation` (`deleted`)",
			color: 0
		}]
	},
	{
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`installation` (`new_permissions_accepted`)",
			color: 0
		}]
	},
	{
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`installation` (`suspend`)",
			color: 0
		}]
	},
	{
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`installation` (`unsuspend`)",
			color: 0
		}]
	}]

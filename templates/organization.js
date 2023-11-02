module.exports = [
	{
		action: "deleted",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`organization` (`deleted`)",
			color: 0
		}]
	},
	{
		action: "member_added",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`organization` (`member_added`)",
			color: 0
		}]
	},
	{
		action: "member_invited",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`organization` (`member_invited`)",
			color: 0
		}]
	},
	{
		action: "member_removed",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`organization` (`member_removed`)",
			color: 0
		}]
	},
	{
		action: "renamed",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`organization` (`renamed`)",
			color: 0
		}]
	}]

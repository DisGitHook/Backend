module.exports = [
	{
		action: "created",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`release` (`created`)",
			color: 0
		}]
	},
	{
		action: "deleted",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`release` (`deleted`)",
			color: 0
		}]
	},
	{
		action: "edited",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`release` (`edited`)",
			color: 0
		}]
	},
	{
		action: "prereleased",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`release` (`prereleased`)",
			color: 0
		}]
	},
	{
		action: "published",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`release` (`published`)",
			color: 0
		}]
	},
	{
		action: "released",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`release` (`released`)",
			color: 0
		}]
	},
	{
		action: "unpublished",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`release` (`unpublished`)",
			color: 0
		}]
	}]

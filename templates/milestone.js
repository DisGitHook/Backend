module.exports = [
	{
		action: "closed",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`milestone` (`closed`)",
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
			title: "`milestone` (`created`)",
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
			title: "`milestone` (`deleted`)",
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
			title: "`milestone` (`edited`)",
			color: 0
		}]
	},
	{
		action: "opened",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`milestone` (`opened`)",
			color: 0
		}]
	}]

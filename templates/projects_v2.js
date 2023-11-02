module.exports = [
	{
		action: "closed",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`projects_v2` (`closed`)",
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
			title: "`projects_v2` (`created`)",
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
			title: "`projects_v2` (`deleted`)",
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
			title: "`projects_v2` (`edited`)",
			color: 0
		}]
	},
	{
		action: "reopened",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`projects_v2` (`reopened`)",
			color: 0
		}]
	}]

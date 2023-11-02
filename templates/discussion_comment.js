module.exports = [
	{
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`discussion_comment` (`created`)",
			color: 0
		}]
	},
	{
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`discussion_comment` (`deleted`)",
			color: 0
		}]
	},
	{
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`discussion_comment` (`edited`)",
			color: 0
		}]
	}]

module.exports = [
	{
		action: "blocked",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`org_block` (`blocked`)",
			color: 0
		}]
	},
	{
		action: "unblocked",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`org_block` (`unblocked`)",
			color: 0
		}]
	}]

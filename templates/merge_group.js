module.exports = [
	{
		action: "checks_requested",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`merge_group` (`checks_requested`)",
			color: 0
		}]
	},
	{
		action: "destroyed",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`merge_group` (`destroyed`)",
			color: 0
		}]
	}]

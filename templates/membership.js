module.exports = [
	{
		action: "added",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`membership` (`added`)",
			color: 0
		}]
	},
	{
		action: "removed",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`membership` (`removed`)",
			color: 0
		}]
	}]

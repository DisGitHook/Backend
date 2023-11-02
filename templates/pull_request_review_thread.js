module.exports = [
	{
		action: "resolved",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`pull_request_review_thread` (`resolved`)",
			color: 0
		}]
	},
	{
		action: "unresolved",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`pull_request_review_thread` (`unresolved`)",
			color: 0
		}]
	}]

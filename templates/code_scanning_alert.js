module.exports = [
	{
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`code_scanning_alert` (`appeared_in_branch`)",
			color: 0
		}]
	},
	{
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`code_scanning_alert` (`closed_by_user`)",
			color: 0
		}]
	},
	{
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`code_scanning_alert` (`created`)",
			color: 0
		}]
	},
	{
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`code_scanning_alert` (`fixed`)",
			color: 0
		}]
	},
	{
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`code_scanning_alert` (`reopened`)",
			color: 0
		}]
	},
	{
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`code_scanning_alert` (`reopened_by_user`)",
			color: 0
		}]
	}]

module.exports = [
	{
		action: "appeared_in_branch",
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
		action: "closed_by_user",
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
		action: "created",
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
		action: "fixed",
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
		action: "reopened",
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
		action: "reopened_by_user",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`code_scanning_alert` (`reopened_by_user`)",
			color: 0
		}]
	}]

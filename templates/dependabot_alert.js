module.exports = [
	{
		action: "auto_dismissed",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`dependabot_alert` (`auto_dismissed`)",
			color: 0
		}]
	},
	{
		action: "auto_reopened",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`dependabot_alert` (`auto_reopened`)",
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
			title: "`dependabot_alert` (`created`)",
			color: 0
		}]
	},
	{
		action: "dismissed",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`dependabot_alert` (`dismissed`)",
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
			title: "`dependabot_alert` (`fixed`)",
			color: 0
		}]
	},
	{
		action: "reintroduced",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`dependabot_alert` (`reintroduced`)",
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
			title: "`dependabot_alert` (`reopened`)",
			color: 0
		}]
	}]

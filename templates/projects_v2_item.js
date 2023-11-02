module.exports = [
	{
		action: "archived",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`projects_v2_item` (`archived`)",
			color: 0
		}]
	},
	{
		action: "converted",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`projects_v2_item` (`converted`)",
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
			title: "`projects_v2_item` (`created`)",
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
			title: "`projects_v2_item` (`deleted`)",
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
			title: "`projects_v2_item` (`edited`)",
			color: 0
		}]
	},
	{
		action: "reordered",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`projects_v2_item` (`reordered`)",
			color: 0
		}]
	},
	{
		action: "restored",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "`projects_v2_item` (`restored`)",
			color: 0
		}]
	}]

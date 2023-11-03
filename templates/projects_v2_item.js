const color = require("../util/color.js")

module.exports = [
	{
		action: "archived",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "[[{{ repository.name }}]({{ repository.html_url }}):{{ repository.default_branch }}] `projects_v2_item` (`archived`)",
			color: color("black")
		}]
	},{
		action: "converted",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "[[{{ repository.name }}]({{ repository.html_url }}):{{ repository.default_branch }}] `projects_v2_item` (`converted`)",
			color: color("black")
		}]
	},{
		action: "created",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "[[{{ repository.name }}]({{ repository.html_url }}):{{ repository.default_branch }}] `projects_v2_item` (`created`)",
			color: color("green")
		}]
	},{
		action: "deleted",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "[[{{ repository.name }}]({{ repository.html_url }}):{{ repository.default_branch }}] `projects_v2_item` (`deleted`)",
			color: color("red")
		}]
	},{
		action: "edited",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "[[{{ repository.name }}]({{ repository.html_url }}):{{ repository.default_branch }}] `projects_v2_item` (`edited`)",
			color: color("cyan")
		}]
	},{
		action: "reordered",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "[[{{ repository.name }}]({{ repository.html_url }}):{{ repository.default_branch }}] `projects_v2_item` (`reordered`)",
			color: color("black")
		}]
	},{
		action: "restored",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "[[{{ repository.name }}]({{ repository.html_url }}):{{ repository.default_branch }}] `projects_v2_item` (`restored`)",
			color: color("black")
		}]
	}
]

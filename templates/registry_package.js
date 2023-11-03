const color = require("../util/color.js")

module.exports = [
	{
		action: "published",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "[[{{ repository.name }}]({{ repository.html_url }}):{{ repository.default_branch }}] `registry_package` (`published`)",
			color: color("black")
		}]
	},{
		action: "updated",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "[[{{ repository.name }}]({{ repository.html_url }}):{{ repository.default_branch }}] `registry_package` (`updated`)",
			color: color("black")
		}]
	}
]

const color = require("../util/color.js")

module.exports = [
	{
		action: "deleted",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "[[{{ repository.name }}]({{ repository.html_url }}):{{ repository.default_branch }}] This webhook has been deleted!",
			color: color("darkRed")
		}]
	}
]

const color = require("../util/color.js")

module.exports = [
	{
		action: "deleted",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "[{{ repository.name }}] This webhook has been deleted",
			url: "{{ repository.html_url }}",
			description: "The following events were enabled:\n```{{ hook.events }}```",
			color: color("darkRed")
		}]
	}
]

const color = require("../util/color.js")

module.exports = [
	{
		action: "deleted",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "[{{ repository.name || organization.name }}] This webhook has been deleted",
			url: "{{ repository ? {{ repository.html_url }}/settings/hooks : https://github.com/organizations/{{ organization.login }}/settings/hooks }}",
			description: "The following events were enabled:\n```{{ hook.events }}```",
			color: color("darkRed")
		}]
	}
]

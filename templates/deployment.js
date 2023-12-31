const color = require("../util/color.js")

module.exports = [
	{
		action: "created",
		embeds: [{
			author: {
				name: "{{ deployment.creator.login }}",
				icon_url: "{{ deployment.creator.avatar_url || sender.avatar_url }}"
			},
			title: "[{{ repository.name }}] Deployment created",
			url: "{{ deployment.url }}",
			description: "{{ deployment.description }}\n\n{{ deployment.environment }}",
			color: color("green")
		}]
	}
]

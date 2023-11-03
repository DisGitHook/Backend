const color = require("../util/color.js")

module.exports = [
	{
		action: "created",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}",
				url: "{{ sender.html_url }}"
			},
			title: "[{{ repository.name }}] Label **{{ label.name }}** created",
			url: "{{ repository.html_url }}",
			description: "{{ label.description }}\n\nColor: #{{ label.color }}",
			color: color("green")
		}]
	},{
		action: "deleted",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}",
				url: "{{ sender.html_url }}"
			},
			title: "[{{ repository.name }}] Label **{{ label.name }}** deleted",
			url: "{{ repository.html_url }}",
			description: "{{ label.description }}\n\nColor: #{{ label.color }}",
			color: color("red")
		}]
	},{
		action: "edited",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}",
				url: "{{ sender.html_url }}"
			},
			title: "[{{ repository.name }}] Label **{{ label.name }}** edited",
			url: "{{ repository.html_url }}",
			description: "{{ label.description }}\n\nColor: #{{ label.color }}",
			color: color("cyan")
		}]
	}
]

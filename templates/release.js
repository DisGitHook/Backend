const color = require("../util/color.js")

module.exports = [
	{
		action: "created",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "[{{ release.name }}] {{ release.draft ? Draft : }} Release created",
			url: "{{ release.html_url }}",
			color: color("green")
		}]
	},{
		action: "deleted",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "[{{ release.name }}] {{ release.draft ? Draft : }} Release deleted",
			color: color("red")
		}]
	},{
		action: "edited",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "[{{ release.name }}] {{ release.draft ? Draft : }} Release edited",
			url: "{{ release.html_url }}",
			color: color("cyan")
		}]
	},{
		action: "prereleased",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "[{{ release.name }}] {{ release.draft ? Draft : }} Release prereleased",
			url: "{{ release.html_url }}",
			color: color("yellow")
		}]
	},{
		action: "published",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "[{{ release.name }}] {{ release.draft ? Draft : }} Release published",
			url: "{{ release.html_url }}",
			color: color("green")
		}]
	},{
		action: "released",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "[{{ release.name }}] {{ release.draft ? Draft : }} Release released",
			url: "{{ release.html_url }}",
			color: color("green")
		}]
	},{
		action: "unpublished",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "[{{ release.name }}] {{ release.draft ? Draft : }} Release unpublished",
			url: "{{ release.html_url }}",
			color: color("red")
		}]
	}
]

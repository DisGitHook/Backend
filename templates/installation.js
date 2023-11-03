const color = require("../util/color.js")

module.exports = [
	{
		action: "created",
		embeds: [{
			author: {
				name: "{{ requester.login || sender.login }}",
				icon_url: "{{ requester.avatar_url || sender.avatar_url }}",
				url: "{{ requester.html_url || sender.html_url }}"
			},
			title: "[{{ repository.name || organization.name }}] Added GitHub app **{{ installation.account.login }}**",
			url: "{{ repository.html_url || organization.html_url }}",
			color: color("green")
		}]
	},{
		action: "deleted",
		embeds: [{
			author: {
				name: "{{ requester.login || sender.login }}",
				icon_url: "{{ requester.avatar_url || sender.avatar_url }}",
				url: "{{ requester.html_url || sender.html_url }}"
			},
			title: "[{{ repository.name || organization.name }}] Uninstalled GitHub app **{{ installation.account.login }}**",
			url: "{{ repository.html_url || organization.html_url }}",
			color: color("red")
		}]
	},{
		action: "new_permissions_accepted",
		embeds: [{
			author: {
				name: "{{ requester.login || sender.login }}",
				icon_url: "{{ requester.avatar_url || sender.avatar_url }}",
				url: "{{ requester.html_url || sender.html_url }}"
			},
			title: "[{{ repository.name || organization.name }}] Accepted new permissions for GitHub app **{{ installation.account.login }}**",
			url: "{{ repository.html_url || organization.html_url }}",
			color: color("gray")
		}]
	},{
		action: "suspend",
		embeds: [{
			author: {
				name: "{{ requester.login || sender.login }}",
				icon_url: "{{ requester.avatar_url || sender.avatar_url }}",
				url: "{{ requester.html_url || sender.html_url }}"
			},
			title: "[{{ repository.name || organization.name }}] Suspended GitHub app **{{ installation.account.login }}**",
			url: "{{ repository.html_url || organization.html_url }}",
			color: color("red")
		}]
	},{
		action: "unsuspend",
		embeds: [{
			author: {
				name: "{{ requester.login || sender.login }}",
				icon_url: "{{ requester.avatar_url || sender.avatar_url }}",
				url: "{{ requester.html_url || sender.html_url }}"
			},
			title: "[{{ repository.name || organization.name }}] Unsuspended GitHub app **{{ installation.account.login }}**",
			url: "{{ repository.html_url || organization.html_url }}",
			color: color("green")
		}]
	}
]

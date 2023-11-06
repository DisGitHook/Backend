const color = require("../util/color.js")

module.exports = [
	{
		action: "deleted",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}",
				url: "{{ sender.html_url }}"
			},
			title: "[{{ organization.name }}] This organization has been deleted",
			color: color("darkRed")
		}]
	},{
		action: "member_added",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}",
				url: "{{ sender.html_url }}"
			},
			title: "[{{ organization.name }}] **{{ member.user.login }}** added to organization",
			url: "{{ organization.html_url }}",
			color: color("green")
		}]
	},{
		action: "member_invited",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}",
				url: "{{ sender.html_url }}"
			},
			title: "[{{ organization.name }}] **{{ invitation.login || invitation.email }}** invited to organization",
			url: "{{ organization.html_url }}",
			color: color("gray")
		}]
	},{
		action: "member_removed",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}",
				url: "{{ sender.html_url }}"
			},
			title: "[{{ organization.name }}] **{{ member.user.login }}** removed from organization",
			url: "{{ organization.html_url }}",
			color: color("red")
		}]
	},{
		action: "renamed",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}",
				url: "{{ sender.html_url }}"
			},
			title: "Organization renamed from **{{ changes.login.from }}** to **{{ organization.name }}**",
			url: "{{ organization.html_url }}",
			color: color("cyan")
		}]
	}
]

const color = require("../util/color.js")

module.exports = [
	{
		action: "approved",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "[{{ organization.name }}] Personal access token request was approved",
			description: "Requested by {{ personal_access_token_request.owner.login }}",
			thumbnail: {
				url: "{{ personal_access_token_request.owner.avatar_url }}"
			},
			color: color("green")
		}]
	},{
		action: "cancelled",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "[{{ organization.name }}] Personal access token request was cancelled",
			url: "{{ organization.html_url }}",
			color: color("red")
		}]
	},{
		action: "created",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "[{{ organization.name }}] Personal access token requested",
			url: "{{ organization.html_url }}",
			color: color("green")
		}]
	},{
		action: "denied",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "[{{ organization.name }}] Personal access token request was denied",
			url: "{{ organization.html_url }}",
			color: color("red")
		}]
	}
]

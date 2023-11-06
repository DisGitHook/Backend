const color = require("../util/color.js")

module.exports = [
	{
		action: "assigned",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}",
				url: "{{ sender.html_url }}"
			},
			title: "[{{ repository.name }}] Pull request **#{{ pull_request.number }}** assigned to **{{ assignee.login }}**",
			url: "{{ pull_request.html_url }}",
			description: "{{ pull_request.title}}",
			color: color("cyan")
		}]
	},{
		action: "auto_merge_disabled",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}",
				url: "{{ sender.html_url }}"
			},
			title: "[{{ repository.name }}] Auto merge disabled for **{{ pull_request.number }}**",
			url: "{{ pull_request.html_url }}",
			description: "{{ pull_request.title}}",
			color: color("red")
		}]
	},{
		action: "auto_merge_enabled",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}",
				url: "{{ sender.html_url }}"
			},
			title: "[{{ repository.name }}] Auto merge enabled for **{{ pull_request.number }}**",
			url: "{{ pull_request.html_url }}",
			description: "{{ pull_request.title}}",
			color: color("green")
		}]
	},{
		action: "closed",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}",
				url: "{{ sender.html_url }}"
			},
			title: "[{{ repository.name }}] Pull request **#{{ pull_request.number }}** closed",
			url: "{{ pull_request.html_url }}",
			description: "{{ pull_request.title}}",
			color: color("red")
		}]
	},{
		action: "converted_to_draft",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}",
				url: "{{ sender.html_url }}"
			},
			title: "[{{ repository.name }}] Pull request **#{{ pull_request.number }}** converted to draft",
			url: "{{ pull_request.html_url }}",
			description: "{{ pull_request.title}}",
			color: color("gray")
		}]
	},{
		action: "demilestoned",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}",
				url: "{{ sender.html_url }}"
			},
			title: "[{{ repository.name }}] Pull request **#{{ pull_request.number }}** removed from milestone **{{ milestone.title }}**",
			url: "{{ pull_request.html_url }}",
			description: "{{ pull_request.title}}",
			color: color("cyan")
		}]
	},{
		action: "dequeued",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}",
				url: "{{ sender.html_url }}"
			},
			title: "[{{ repository.name }}] Pull request **#{{ pull_request.number }}** removed from queue",
			url: "{{ pull_request.html_url }}",
			description: "{{ pull_request.title}}",
			color: color("cyan")
		}]
	},{
		action: "edited",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}",
				url: "{{ sender.html_url }}"
			},
			title: "[{{ repository.name }}] Pull request **#{{ pull_request.number }}** edited",
			url: "{{ pull_request.html_url }}",
			description: "{{ pull_request.title}}",
			color: color("cyan")
		}]
	},{
		action: "enqueued",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}",
				url: "{{ sender.html_url }}"
			},
			title: "[{{ repository.name }}] Pull request **#{{ pull_request.number }}** added to queue",
			url: "{{ pull_request.html_url }}",
			description: "{{ pull_request.title}}",
			color: color("cyan")
		}]
	},{
		action: "labeled",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}",
				url: "{{ sender.html_url }}"
			},
			title: "[{{ repository.name }}] Label {{ label.name }} added to pull request **#{{ pull_request.number }}**",
			url: "{{ pull_request.html_url }}",
			description: "{{ pull_request.title}}",
			color: color("cyan")
		}]
	},{
		action: "locked",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}",
				url: "{{ sender.html_url }}"
			},
			title: "[{{ repository.name }}] Pull request **#{{ pull_request.number }}** locked",
			url: "{{ pull_request.html_url }}",
			description: "{{ pull_request.title}}",
			color: color("magenta")
		}]
	},{
		action: "milestoned",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}",
				url: "{{ sender.html_url }}"
			},
			title: "[{{ repository.name }}] Pull request **#{{ pull_request.number }}** added to milestone **{{ milestone.title }}**",
			url: "{{ pull_request.html_url }}",
			description: "{{ pull_request.title}}",
			color: color("cyan")
		}]
	},{
		action: "opened",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}",
				url: "{{ sender.html_url }}"
			},
			title: "[{{ repository.name }}] Pull request **#{{ pull_request.number }}** opened",
			url: "{{ pull_request.html_url }}",
			description: "{{ pull_request.title}}",
			color: color("green")
		}]
	},{
		action: "ready_for_review",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}",
				url: "{{ sender.html_url }}"
			},
			title: "[{{ repository.name }}] Pull request **#{{ pull_request.number }}** marked as ready for review",
			url: "{{ pull_request.html_url }}",
			description: "{{ pull_request.title}}",
			color: color("gray")
		}]
	},{
		action: "reopened",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}",
				url: "{{ sender.html_url }}"
			},
			title: "[{{ repository.name }}] Pull request **#{{ pull_request.number }}** reopened",
			url: "{{ pull_request.html_url }}",
			description: "{{ pull_request.title}}",
			color: color("green")
		}]
	},{
		action: "review_request_removed",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}",
				url: "{{ sender.html_url }}"
			},
			title: "[{{ repository.name }}] Pull request **#{{ pull_request.number }}** review request removed",
			url: "{{ pull_request.html_url }}",
			description: "{{ pull_request.title}}",
			color: color("magenta")
		}]
	},{
		action: "review_requested",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}",
				url: "{{ sender.html_url }}"
			},
			title: "[{{ repository.name }}] Pull request review requested on **#{{ pull_request.number }}**",
			url: "{{ pull_request.html_url }}",
			description: "{{ pull_request.title}}",
			color: color("magenta")
		}]
	},{
		action: "synchronize",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}",
				url: "{{ sender.html_url }}"
			},
			title: "[{{ repository.name }}] Pull request **#{{ pull_request.number }}** head branch updated",
			url: "{{ pull_request.html_url }}",
			description: "{{ pull_request.title}}",
			color: color("gray")
		}]
	},{
		action: "unassigned",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}",
				url: "{{ sender.html_url }}"
			},
			title: "[{{ repository.name }}] Assignee removed from pull request **#{{ pull_request.number }}**",
			url: "{{ pull_request.html_url }}",
			description: "{{ pull_request.title}}",
			color: color("cyan")
		}]
	},{
		action: "unlabeled",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}",
				url: "{{ sender.html_url }}"
			},
			title: "[{{ repository.name }}] Label {{ label.name }} removed from pull request **#{{ pull_request.number }}**",
			url: "{{ pull_request.html_url }}",
			description: "{{ pull_request.title}}",
			color: color("cyan")
		}]
	},{
		action: "unlocked",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}",
				url: "{{ sender.html_url }}"
			},
			title: "[{{ repository.name }}] Pull request **#{{ pull_request.number }}** unlocked",
			url: "{{ pull_request.html_url }}",
			description: "{{ pull_request.title}}",
			color: color("magenta")
		}]
	}
]

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
			title: "[{{ repository.name }}] Issue **#{{ issue.number }}** assigned to **{{ assignee.login }}**",
			url: "{{ issue.html_url }}",
			description: "{{ issue.title }}",
			color: color("cyan")
		}]
	},{
		action: "closed",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}",
				url: "{{ sender.html_url }}"
			},
			title: "[{{ repository.name }}] Issue **#{{ issue.number }}** closed",
			url: "{{ issue.html_url }}",
			description: "{{ issue.title }}",
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
			title: "[{{ repository.name }}] Issue **#{{ issue.number }}** deleted",
			url: "{{ issue.html_url }}",
			description: "{{ issue.title }}",
			color: color("red")
		}]
	},{
		action: "demilestoned",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}",
				url: "{{ sender.html_url }}"
			},
			title: "[{{ repository.name }}] Issue **#{{ issue.number }}** removed from milestone **{{ milestone.title }}**",
			url: "{{ issue.html_url }}",
			description: "{{ issue.title }}",
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
			title: "[{{ repository.name }}] Issue **#{{ issue.number }}** edited",
			url: "{{ issue.html_url }}",
			description: "{{ issue.title }}",
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
			title: "[{{ repository.name }}] Label {{ label.name }} added to issue **#{{ issue.number }}**",
			url: "{{ issue.html_url }}",
			description: "{{ issue.title }}",
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
			title: "[{{ repository.name }}] Issue **#{{ issue.number }}** locked",
			url: "{{ issue.html_url }}",
			description: "{{ issue.title }}",
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
			title: "[{{ repository.name }}] Issue **#{{ issue.number }}** added to milestone **{{ milestone.title }}**",
			url: "{{ issue.html_url }}",
			description: "{{ issue.title }}",
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
			title: "[{{ repository.name }}] Issue **#{{ issue.number }}** opened",
			url: "{{ issue.html_url }}",
			description: "{{ issue.title }}",
			color: color("blue")
		}]
	},{
		action: "pinned",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}",
				url: "{{ sender.html_url }}"
			},
			title: "[{{ repository.name }}] Issue **#{{ issue.number }}** pinned",
			url: "{{ issue.html_url }}",
			description: "{{ issue.title }}",
			color: color("magenta")
		}]
	},{
		action: "reopened",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}",
				url: "{{ sender.html_url }}"
			},
			title: "[{{ repository.name }}] Issue **#{{ issue.number }}** reopened",
			url: "{{ issue.html_url }}",
			description: "{{ issue.title }}",
			color: color("red")
		}]
	},{
		action: "transferred",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}",
				url: "{{ sender.html_url }}"
			},
			title: "[{{ repository.name }}] Issue **#{{ issue.number }}** transferred",
			url: "{{ issue.html_url }}",
			description: "{{ issue.title }}",
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
			title: "[{{ repository.name }}] Assignee removed from issue **#{{ issue.number }}**",
			url: "{{ issue.html_url }}",
			description: "{{ issue.title }}",
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
			title: "[{{ repository.name }}] Label {{ label.name }} removed from issue **#{{ issue.number }}**",
			url: "{{ issue.html_url }}",
			description: "{{ issue.title }}",
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
			title: "[{{ repository.name }}] Issue **#{{ issue.number }}** unlocked",
			url: "{{ issue.html_url }}",
			description: "{{ issue.title }}",
			color: color("magenta")
		}]
	},{
		action: "unpinned",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}",
				url: "{{ sender.html_url }}"
			},
			title: "[{{ repository.name }}] Issue **#{{ issue.number }}** unpinned",
			url: "{{ issue.html_url }}",
			description: "{{ issue.title }}",
			color: color("magenta")
		}]
	}
]

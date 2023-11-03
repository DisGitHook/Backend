const color = require("../util/color.js")

module.exports = [
	{
		action: "answered",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "[{{ repository.name }}:{{ repository.default_branch }}] `discussion` (`answered`)",
			url: "{{ repository.html_url }}",
			color: color("black")
		}]
	},{
		action: "category_changed",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "[{{ repository.name }}:{{ repository.default_branch }}] `discussion` (`category_changed`)",
			url: "{{ repository.html_url }}",
			color: color("black")
		}]
	},{
		action: "closed",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "[{{ repository.name }}:{{ repository.default_branch }}] `discussion` (`closed`)",
			url: "{{ repository.html_url }}",
			color: color("black")
		}]
	},{
		action: "created",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "[{{ repository.name }}:{{ repository.default_branch }}] `discussion` (`created`)",
			url: "{{ repository.html_url }}",
			color: color("green")
		}]
	},{
		action: "deleted",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "[{{ repository.name }}:{{ repository.default_branch }}] `discussion` (`deleted`)",
			url: "{{ repository.html_url }}",
			color: color("red")
		}]
	},{
		action: "edited",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "[{{ repository.name }}:{{ repository.default_branch }}] `discussion` (`edited`)",
			url: "{{ repository.html_url }}",
			color: color("cyan")
		}]
	},{
		action: "labeled",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "[{{ repository.name }}:{{ repository.default_branch }}] `discussion` (`labeled`)",
			url: "{{ repository.html_url }}",
			color: color("cyan")
		}]
	},{
		action: "locked",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "[{{ repository.name }}:{{ repository.default_branch }}] `discussion` (`locked`)",
			url: "{{ repository.html_url }}",
			color: color("gray")
		}]
	},{
		action: "pinned",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "[{{ repository.name }}:{{ repository.default_branch }}] `discussion` (`pinned`)",
			url: "{{ repository.html_url }}",
			color: color("black")
		}]
	},{
		action: "reopened",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "[{{ repository.name }}:{{ repository.default_branch }}] `discussion` (`reopened`)",
			url: "{{ repository.html_url }}",
			color: color("black")
		}]
	},{
		action: "transferred",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "[{{ repository.name }}:{{ repository.default_branch }}] `discussion` (`transferred`)",
			url: "{{ repository.html_url }}",
			color: color("black")
		}]
	},{
		action: "unanswered",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "[{{ repository.name }}:{{ repository.default_branch }}] `discussion` (`unanswered`)",
			url: "{{ repository.html_url }}",
			color: color("black")
		}]
	},{
		action: "unlabeled",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "[{{ repository.name }}:{{ repository.default_branch }}] `discussion` (`unlabeled`)",
			url: "{{ repository.html_url }}",
			color: color("black")
		}]
	},{
		action: "unlocked",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "[{{ repository.name }}:{{ repository.default_branch }}] `discussion` (`unlocked`)",
			url: "{{ repository.html_url }}",
			color: color("black")
		}]
	},{
		action: "unpinned",
		embeds: [{
			author: {
				name: "{{ sender.login }}",
				icon_url: "{{ sender.avatar_url }}"
			},
			title: "[{{ repository.name }}:{{ repository.default_branch }}] `discussion` (`unpinned`)",
			url: "{{ repository.html_url }}",
			color: color("black")
		}]
	}
]

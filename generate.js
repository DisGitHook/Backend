const events = {
	"branch_protection_configuration": ["disabled", "enabled"],
	"branch_protection_rule": ["created", "edited", "deleted"],
	"check_run": ["completed", "created", "requested_action", "rerequested"],
	"check_suite": ["completed", "requested", "rerequested"],
	"code_scanning_alert": ["appeared_in_branch", "closed_by_user", "created", "fixed", "reopened", "reopened_by_user"],
	"commit_comment": [],
	"create": [],
	"custom_property": ["created", "deleted", "updated"],
	"custom_property_values": [],
	"delete": [],
	"dependabot_alert": ["auto_dismissed", "auto_reopened", "created", "dismissed", "fixed", "reintroduced", "reopened"],
	"deploy_key": ["created", "deleted"],
	"deployment": [],
	"deployment_protection_rule": [],
	"deployment_review": ["approved", "rejected", "requested"],
	"deployment_status": [],
	"discussion": ["answered", "category_changed", "closed", "created", "deleted", "edited", "labeled", "locked", "pinned", "reopened", "transferred", "unanswered", "unlabeled", "unlocked", "unpinned"],
	"discussion_comment": ["created", "deleted", "edited"],
	"fork": [],
	"github_app_authorization": [],
	"gollum": [],
	"installation": ["created", "deleted", "new_permissions_accepted", "suspend", "unsuspend"],
	"installation_repositories": ["added", "removed"],
	"installation_target": [],
	"issue_comment": ["created", "deleted", "edited"],
	"issues": ["assigned", "closed", "deleted", "demilestoned", "edited", "labeled", "locked", "milestoned", "opened", "pinned", "reopened", "transferred", "unassigned", "unlabeled", "unlocked", "unpinned"],
	"label": ["created", "deleted", "edited"],
	"marketplace_purchase": ["cancelled", "changed", "pending_change", "pending_change_cancelled", "purchased"],
	"member": ["added", "edited", "removed"],
	"membership": ["added", "removed"],
	"merge_group": ["checks_requested", "destroyed"],
	"meta": ["deleted"],
	"milestone": ["closed", "created", "deleted", "edited", "opened"],
	"org_block": ["blocked", "unblocked"],
	"organization": ["deleted", "member_added", "member_invited", "member_removed", "renamed"],
	"package": ["published", "updated"],
	"page_build": [],
	"personal_access_token_request": ["approved", "cancelled", "created", "denied"],
	"project_card": ["converted", "created", "deleted", "edited", "moved"],
	"project": ["closed", "created", "deleted", "edited", "reopened"],
	"project_column": ["created", "deleted", "edited", "moved"],
	"projects_v2": ["closed", "created", "deleted", "edited", "reopened"],
	"projects_v2_item": ["archived", "converted", "created", "deleted", "edited", "reordered", "restored"],
	"public": [],
	"pull_request": ["assigned", "auto_merge_disabled", "auto_merge_enabled", "closed", "converted_to_draft", "demilestoned", "dequeued", "edited", "enqueued", "labeled", "locked",
		"milestoned", "opened", "ready_for_review", "reopened", "review_request_removed", "review_requested", "synchronize", "unassigned", "unlabeled", "unlocked"],
	"pull_request_review_comment": ["created", "deleted", "edited"],
	"pull_request_review": ["dismissed", "edited", "submitted"],
	"pull_request_review_thread": ["resolved", "unresolved"],
	"push": [],
	"registry_package": ["published", "updated"],
	"release": ["created", "deleted", "edited", "prereleased", "published", "released", "unpublished"],
	"repository_advisory": ["published", "reported"],
	"repository": ["archived", "created", "deleted", "edited", "privatized", "publicized", "renamed", "transferred", "unarchived"],
	"repository_dispatch": [],
	"repository_import": [],
	"repository_ruleset": ["created", "deleted", "edited"],
	"repository_vulnerability_alert": ["create", "dismiss", "reopen", "resolve"],
	"secret_scanning_alert": ["created", "reopened", "resolved", "revoked"],
	"secret_scanning_alert_location": ["created"],
	"security_advisory": ["published", "updated", "withdrawn"],
	"security_and_analysis": [],
	"sponsorship": ["cancelled", "created", "edited", "pending_cancellation", "pending_tier_change", "tier_changed"],
	"star": ["created", "deleted"],
	"status": [],
	"team_add": [],
	"team": ["added_to_repository", "created", "deleted", "edited", "removed_from_repository"],
	"watch": ["started"],
	"workflow_dispatch": [],
	"workflow_job": ["completed", "in_progress", "queued", "waiting"],
	"workflow_run": ["completed", "in_progress", "requested"]
}

const fs = require("node:fs")
const path = require("node:path")

Object.keys(events).forEach(event => {
	fs.writeFile(path.join(__dirname, "templates", event + ".js"),
		"const color = require(\"../util/color.js\")\n\n" +
		(events[event].length == 0 ?
			"module.exports = [\n" +
			"\t{\n" +
			"\t\tembeds: [{\n" +
			"\t\t\tauthor: {\n" +
			"\t\t\t\tname: \"{{ sender.login }}\",\n" +
			"\t\t\t\ticon_url: \"{{ sender.avatar_url }}\"\n" +
			"\t\t\t},\n" +
			"\t\t\ttitle: \"`" + event + "`\",\n" +
			"\t\t\tcolor: color(\"black\")\n" +
			"\t\t}]\n" +
			"\t}\n" +
			"]\n"
		:
			"module.exports = [\n\t" +
			events[event].map(action => {
				return "{\n" +
					"\t\taction: \"" + action + "\",\n" +
					"\t\tembeds: [{\n" +
					"\t\t\tauthor: {\n" +
					"\t\t\t\tname: \"{{ sender.login }}\",\n" +
					"\t\t\t\ticon_url: \"{{ sender.avatar_url }}\"\n" +
					"\t\t\t},\n" +
					"\t\t\ttitle: \"`" + event + "` (`" + action + "`)\",\n" +
					"\t\t\tcolor: color(\"" + (action == "created" || action == "resolved" || action == "approved" ? "green" : (action == "deleted" || action == "rejected" ? "red" : "black")) + "\")\n" +
					"\t\t}]\n" +
					"\t}"
			}).join(",") +
			"\n]\n"),
		e => {
			if (e) throw e
		}
	)
})

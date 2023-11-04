# DisGitHook Backend

This repository contains the backend code for the DisGitHook project.

It contains the API for the website and the code for handling webhooks.

[![Discord](https://discord.com/api/v10/guilds/1168642348851396658/widget.png?style=banner4)](https://discord.gg/ADP7rn6Hz8)

## API routes

- `GET` /
- `GET` /login
- `GET` /logout
- `GET` /servers
- `GET` /servers/:id/hooks
- `POST` /servers/:id/hooks
- `POST` /servers/:id/hooks/:hook
- `DELETE` /servers/:id/hooks/:hook
- `POST` /servers/:id/hooks/:hook/regen

## Webhook routes

- `POST` /hook/:id & Authorization header
- `POST` /hook/:id/:secret

## Templates and webhook data

All sent data is from the [GitHub webhook documentation](https://docs.github.com/de/webhooks/webhook-events-and-payloads).

Exceptions:
- `ping` event is not sent
- `registry_package` event has no templates in favor of the `package` event as recommended by GitHub
- `repository_vulnerability_alert` because it is deprecated in favor of `dependabot_alert` as recommended by GitHub
- `team_add` because the `added_to_repository` action from `team` is the same
- `repository_dispatch` has no template because it is not used for webhooks
- `requested_action` and `rerequested` actions of the `check_run` event because they are not used for webhooks
- `requested` and `rerequested` actions of the `check_suite` event because they are not used for webhooks
- `project_card`, `project` and `project_column` have no templates due to being deprecated (Projects "Classic")
- `secret_scanning_alert_location` as it only triggers on issues `secret_scanning_alert` already triggers on
- `deleted` action of `repository` as it is not used for webhooks

## Variables

- Top level: `{{variable}}` or `{{ variable }}`
- Below: `{{ variable.data }}`
- Array length: `{{ count(variable.data) }}`
- Ternary: `{{ variable.data ? Yes : No }}`
- OR: `{{ variable.data || No }}`
- Double spaces are removed

# DisGitHook Backend

This repository contains the backend code for the DisGitHook project.

It contains the API for the website and the code for handling webhooks.

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

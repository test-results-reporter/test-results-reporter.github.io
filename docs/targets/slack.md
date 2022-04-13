# Slack

Slack is a communication platform. To send reports to a slack channel, we need to create a incoming webhook url. Follow this [docs](https://api.slack.com/messaging/webhooks) to create one.

## Arguments

#### > url (string)

Incoming webhook url from slack.

#### > publish (string) _(optional)_

Type of report to be published to the slack channel.

- test-summary _(default)_
- test-summary-slim
- failure-details

#### > only_failures (boolean) _(optional)_

Only include failed test suite or test case details.

> Defaults to **false**

#### > title (string) _(optional)_

Overrides the default title.

#### > title_suffix (string) _(optional)_

Adds a custom suffix to the title.

## Reports

### test-summary

### test-summary-slim

### failure-details
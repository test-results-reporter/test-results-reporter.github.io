---
tags:
  - google chat
  - chat
---

# Chat

Chat is a communication platform from Google. To send reports to a chat space, we need to create a incoming webhook url. Follow this [docs](https://developers.google.com/chat/how-tos/webhooks#create_a_webhook) to create one.

## Syntax

```json
{
  "name": "chat",
  "condition": "fail",
  "inputs": {
    "url": "<chat-incoming-webhook-url>"
  }
}
```

- `url` (**string**) - incoming webhook url from chat.
- `publish?` (**string**) - type of report to be published to the chat space. *defaults to `test-summary`*
  > `test-summary`, `test-summary-slim`, `failure-details`
- `only_failures?` (**boolean**) - only include failed test suite or test case details.
- `title?` (**string**) - title of the target to be displayed.
- `title_link?` (**string**) - attaches a clickable link to the title.
- `title_suffix?` (**string**) - adds a custom suffix to the title.
- `max_suites` (**number**) - limit on the number of suites.*defaults to `10`*

## Reports

### test-summary

It includes a test title, total duration and success percentage. If multiple suites are available, it also displays the above details per suite.

> Single Test Suite

![single-suite](../assets/images/chat/chat-test-summary-single-suite.png)

> Multiple Test Suites

![multiple-suite](../assets/images/chat/chat-test-summary-multiple-suites.png)

### test-summary-slim

It just includes a test title, total duration and success percentage. This report will totally ignore the test suites.

::: tip
This report type  helps to maintain primary channels clean.
:::

### failure-details

This report will include the failed test case names along with the failure reasons.

![failure-details](../assets/images/chat/chat-failure-details.png)

## Examples

Sample config file.

```json {3-9}
{
  "targets": [
    {
      "name": "chat",
      "inputs": {
        "url": "<chat-incoming-webhook-url>",
        "publish": "test-summary-slim"
      }
    }
  ],
  "results": [
    {
      "type": "testng",
      "files": ["path/to/testng-results.xml"]
    }
  ]
}
```

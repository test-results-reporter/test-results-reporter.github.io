---
tags:
  - link
---

# Hyperlinks

Hyperlinks extension will attach links to your teams or slack reports.

::: details DEFAULTS

- hook: `end`
- condition: `passOrFail`

:::

## Syntax

```json
{
  "name": "hyperlinks",
  "condition": "passOrFail",
  "inputs": {
    "links": [
      {
        "text": "Build Logs",
        "url": "<build-logs-url>"
      }
    ]
  }
}
```

- `links` (**object[]**) - list of link objects.
  - `text` (**string**) - text to display.
  - `url` (**string|function**) - custom url to link the above text.
  - `condition?` (**[condition](/guides/conditions)**) - condition to include this link.

## Reports

### Teams

![teams-link](../assets/images/teams/teams-links.png)

### Slack

![slack-link](../assets/images/slack/slack-hyperlinks.png)

## Examples

Sample partial config file.

```js
{
  "targets": [
    {
      "name": "teams",
      "inputs": {
        "url": "<teams-incoming-webhook-url>"
      },
      "extensions": [
        {
          "name": "hyperlinks",
          "inputs": {
            "links": [
              {
                "text": "Build Logs",
                "url": "<build-logs-url>"
              },
              {
                "text": "Video",
                "url": "<video-url>",
                "condition": "fail"
              },
              {
                "text": "Video",
                "url": async ({ result }) => { return '<some-url>' }
              }
            ]
          }
        }
      ]
    }
  ],
  "results": [
    {
      "type": "testng",
      "files": [
        "path/to/testng-results.xml"
      ]
    }
  ]
}
```

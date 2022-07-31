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

## Inputs

#### > links (object[])

Array of link objects

#### > link.text (string)

Text to display on the message.

#### > link.url (string | Function)

Url to link to the given text in the message.

#### > [Optional] link.condition (string)

Condition on which the given link should be added to the message.
- `pass`
- `fail`
- `passOrFail`

> Defaults to **passOrFail**

## Reports

### Teams

![teams-link](../assets/images/teams/teams-links.png)

### Slack

![slack-link](../assets/images/slack/slack-hyperlinks.png)

## Examples

Sample partial config file.

```js
{
  "reports": [
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
          "files": ["path/to/testng-results.xml"]
        }
      ]
    }
  ]
}
```
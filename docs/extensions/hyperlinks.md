# Hyperlinks

Hyperlinks extension will attach links to your teams or slack reports.

## Arguments

#### > links (object[])

Array of link objects

#### > link.text (string)

Text to display on the message.

#### > link.url (string)

Url to link to the given text in the message.

## Reports

### Teams

![teams-link](../assets/images/teams/teams-links.png)

### Slack

![slack-link](../assets/images/slack/slack-hyperlinks.png)

## Examples

Sample partial config file.

```json {11-25}
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
              "name": "links",
              "inputs": {
                "links": [
                  {
                    "text": "Build Logs",
                    "url": "<build-logs-url>"
                  },
                  {
                    "text": "Video",
                    "url": "<video-url>"
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
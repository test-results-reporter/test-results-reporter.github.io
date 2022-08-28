---
tags:
  - on-call
  - oncall
  - tag user
---

# Mentions

Mentions will tag users in the slack or teams messages to alert them.

::: tip

In general, tagging users will help to maintain accountability on owning test failures. It also reduces the ambiguity on who needs to look into failures based on a on-call schedule. 

:::

::: details DEFAULTS

- hook: `end`
- condition: `fail`

:::

## Syntax

```json
{
  "name": "mentions",
  "inputs": {
    "users": [
      {
        "name": "Jon",
        "teams_upn": "jon@microsift.com"
      }
    ]
  }
}
```


- `users` (**object[]**) - list of users.
  - `name` (**string**) - name of the user to display.
  - `teams_upn?` (**string**) - user's [UPN](https://docs.microsoft.com/en-us/azure/active-directory/hybrid/plan-connect-userprincipalname) in teams. Mandatory if the target is **teams**.
  - `slack_uid?` (**string**) - user's [unique id](https://www.workast.com/help/articles/61000165203) in slack. Mandatory if the target is **slack**.
  - `chat_uid?` (**string**) - user's [unique id](https://stackoverflow.com/a/58923385) in chat. Mandatory if the target is **chat**.
  - `enable?` (**boolean**) - enable or disable user's availability for on-call support. 
    > If a user is disable, the next user enabled user will be picked. If no user is enabled, then the original user is mentioned.
- `schedule?` (**object**) - on-call schedule.
  - `layers` (**object[]**) - on-call schedule layers. If there are multiple layers, the layer will take precedence in a given time frame.
    - `start?` (**string**) - start time of the layer mentioned in the format of `HH:MM:SS`.
    - `end?` (**string**) - end time of the layer mentioned in the format of `HH:MM:SS`.
    - `user?` (**object**) - current layer user. *use this if there is only one user*
    - `rotation?` (**object**) - layer rotation. *use this if there are multiple users*
      - `every?` (**string**) - rotate a user on the given schedule.
        > [day](https://www.epochconverter.com/daynumbers), [week](https://www.epochconverter.com/weeknumbers)
      - `users?` (**object[]**) - rotation users.

## Reports

### Teams

![teams-link](../assets/images/teams/teams-mentions.png)

### Slack

![slack-link](../assets/images/slack/slack-mentions.png)

## Examples

#### Mentioning a user.

Sample config file, where the same user will be mentioned every time.

```js {11-21}
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
              "name": "mentions",
              "inputs": {
                "users": [
                  {
                    "name": "Jon",
                    "teams_upn": "jon@microsift.com"
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

#### Mentioning a user via schedule.

One of the user will be mentioned based on the [week number](https://www.epochconverter.com/weeknumbers).

```js {11-34}
{
  "reports": [
    {
      "targets": [
        {
          "name": "slack",
          "inputs": {
            "url": "<slack-incoming-webhook-url>"
          },
          "extensions": [
            {
              "name": "mentions",
              "inputs": {
                "schedule": {
                  "layers": [
                    {
                      "rotation": {
                        "every": "week",
                        "users": [
                          {
                            "name": "Jon",
                            "slack_uid": "ULA15K66N"
                          },
                          {
                            "name": "Mary",
                            "slack_uid": "ULA15K66M"
                          }
                        ]
                      }
                    }
                  ]
                }
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

#### Disabled user with multiple layers.

The first layer will be used from `06 AM` to `05 PM` everyday where **Mary** user will be tagged always as **Jon** is disabled. The second layer will be used from `05 PM` to next day `06 AM`.

```js {17-18,25}
{
  "reports": [
    {
      "targets": [
        {
          "name": "slack",
          "inputs": {
            "url": "<slack-incoming-webhook-url>"
          },
          "extensions": [
            {
              "name": "mentions",
              "inputs": {
                "schedule": {
                  "layers": [
                    {
                      "start": "06:00:00",
                      "end": "17:00:00",
                      "rotation": {
                        "every": "week",
                        "users": [
                          {
                            "name": "Jon",
                            "slack_uid": "ULA15K66N",
                            "enable": false
                          },
                          {
                            "name": "Mary",
                            "slack_uid": "ULA15K66M"
                          }
                        ]
                      }
                    },
                    {
                      "rotation": {
                        "every": "day",
                        "users": [
                          {
                            "name": "Gary",
                            "slack_uid": "ULA15K66A"
                          },
                          {
                            "name": "Zen",
                            "slack_uid": "ULA15K66B"
                          }
                        ]
                      }
                    }
                  ]
                }
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

## Notes

This library uses [rosters](https://github.com/test-results-reporter/rosters) to support on-call schedules.

---
tags:
  - percy
---

# Percy Analysis

[Percy](https://percy.io/) is an all-in-one visual testing and review platform. This extension will include the number of snapshots approved and needs to be reviewed.

> Defaults

::: details DEFAULTS

- hook: `end`
- condition: `passOrFail`

:::

## Inputs

#### > token (string)

Percy integration token with **read** or **full** access.

#### > project_name (string)

Name of the project for reporting the last finished build results.

## Examples

#### Using project_name

```json {11-19}
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
              "name": "percy-analysis",
              "inputs": {
                "token": "<api-token>",
                "project_name": "<project-name>"
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
---
tags:
  - last runs
---

# ReportPortal History

[ReportPortal](https://reportportal.io/) is an open-source tool that allows testers and key project stakeholders to manage and view all of their testing results and reports in one place.

In ReportPortal, the historical trend of executions represents your history view for the list of test items. This feature can help you to find the most unstable test cases in your suites/ launches/ builds..

This extension will help you to display the results of the last *n* runs.

::: details DEFAULTS

- hook: `end`
- condition: `fail`

:::

## Inputs

#### > url (string)

Base url _(https://your-domain.reportportal.com)_.

#### > api_key (string)

Project API key

#### > project (string)

Project Id

#### > launch_id (string)

Launch id will be generated dynamically during the test execution. To use it in the config file, we need to use the [environment variables](/guides/environment-variables). One way is to save it in the `.env` file for this tool to read.

#### > launch_name (string)

If fetching launch id is difficult, we can just use the launch name. This tool will fetch the latest launch id based on the given launch name.

::: danger
If `launch_name` is mentioned, make sure there are no other new runs triggered on the same launch name before the reporting is finished.
:::

#### > history_depth (number)

Number of last runs to display.

**Examples**

- [TestNG](https://github.com/reportportal/agent-java-testNG/issues/180)
- [mocha](https://github.com/reportportal/agent-js-mocha/issues/78)

## Reports

### Teams

![teams-link](../assets/images/teams/teams-report-portal-history.png)

### Slack

![slack-link](../assets/images/slack/slack-report-portal-history.png)

## Examples

#### Using launch_id

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
              "name": "report-portal-history",
              "inputs": {
                "url": "<report-portal-base-url>",
                "api_key": "<api-key>",
                "project": "<project-id>",
                "launch_id": "<launch-id>"
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

#### Using launch_name and history_depth to fetch last 10 runs

```json {11-20}
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
              "name": "report-portal-history",
              "inputs": {
                "url": "<report-portal-base-url>",
                "api_key": "<api-key>",
                "project": "<project-id>",
                "launch_name": "<launch-name>",
                "history_depth": 10
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
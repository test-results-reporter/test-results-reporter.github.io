# ReportPortal Analysis

[ReportPortal](https://reportportal.io) is an open-source tool that allows testers and key project stakeholders to manage and view all of their testing results and reports in one place.

In ReportPortal, failures can be associated with product bug, automation issue, or system issue. Based on collected patterns in previous executions, it can evaluate new fails in conformity with others that are ongoing.

This extension will help you to display the ReportPortal analysis in yours teams or slack messages.

::: details DEFAULTS

- hook: `end`
- condition: `fail`

:::

## Syntax

```json
{
  "name": "report-portal-analysis",
  "inputs": {
    "url": "<report-portal-base-url>",
    "api_key": "<api-key>",
    "project": "<project-id>",
    "launch_id": "<launch-id>"
  }
}
```

- `url` (**string**) - base url of report portal _(https://your-domain.reportportal.com)_.
- `api_key` (**string**) - project api key.
- `project` (**string**) - project id.
- `launch_id?` (**string**) - launch id will be generated dynamically during the test execution. To use it in the config file, we need to use the [environment variables](/guides/environment-variables). One way is to save it in the `.env` file for this tool to read.
  - [TestNG](https://github.com/reportportal/agent-java-testNG/issues/180)
  - [mocha](https://github.com/reportportal/agent-js-mocha/issues/78)
- `launch_name?` (**string**) - if fetching launch id is difficult, we can just use the launch name. This tool will fetch the latest launch id based on the given launch name.
  ::: danger NOTE
  If `launch_name` is mentioned, make sure there are no other new runs triggered on the same launch name before the reporting is finished.
  :::

## Reports

### Teams

![teams-link](../assets/images/teams/teams-report-portal-analysis.png)

### Slack

![slack-link](../assets/images/slack/slack-report-portal-analysis.png)

## Examples

#### Using launch_id

```json {9-17}
{
  "targets": [
    {
      "name": "teams",
      "inputs": {
        "url": "<teams-incoming-webhook-url>"
      },
      "extensions": [
        {
          "name": "report-portal-analysis",
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
```

#### Using launch_name

```json {9-17}
{
  "targets": [
    {
      "name": "teams",
      "inputs": {
        "url": "<teams-incoming-webhook-url>"
      },
      "extensions": [
        {
          "name": "report-portal-analysis",
          "inputs": {
            "url": "<report-portal-base-url>",
            "api_key": "<api-key>",
            "project": "<project-id>",
            "launch_name": "<launch-name>"
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
```
# ReportPortal Analysis

[ReportPortal](https://reportportal.io/) is an open-source tool that allows testers and key project stakeholders to manage and view all of their testing results and reports in one place.

In ReportPortal, failures can be associated with product bug, automation issue, or system issue. Based on collected patterns in previous executions, it can evaluate new fails in conformity with others that are ongoing.

This extension will help you to display the ReportPortal analysis in yours teams or slack messages.

## Arguments

#### > url (string)

Base url _(https://your-domain.reportportal.com)_.

#### > api_key (string)

Project API key

#### > project (string)

Project Id

#### > launch_id (string)

Launch Id

## Reports

### Teams

![teams-link](../assets/images/teams/teams-report-portal-analysis.png)

### Slack

![slack-link](../assets/images/slack/slack-report-portal-analysis.png)

## Examples

Sample partial config file.

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
  ]
}
```

## Launch ID

Launch id will be generated dynamically during the test execution. To use it in the config file, we need to use the [environment variables](/guides/environment-variables). One way is to save it in the `.env` file which will be read by this tool.

### Examples

- [TestNG](https://github.com/reportportal/agent-java-testNG/issues/180)
- [mocha](https://github.com/reportportal/agent-js-mocha/issues/78)

## Notes

Acronyms and color codings are similar to ReportPortal.

::: tip

🔴 PB - Product Bug

🟡 AB - Automation Bug

🔵 SI - System Issue

◯ ND - Not Defect

🟠 TI - To Investigate

:::
---
tags:
  - html
  - testbeats
  - smart analysis
---

# TestBeats

TestBeats unifies your testing efforts by providing a single source of truth for all your test results.  Say goodbye to sifting through individual reports and hello to a consolidated view of test results, offering a holistic perspective on your software's health.

## Get Started

Don't have a TestBeats account yet? Sign up with your work email at [app.testbeats.com](https://app.testbeats.com). Once you're signed up, create a new organization and generate an API key.

::: tip Did you know?
If you have registered using your work email, individuals from your organization who share the same email domain will have access to the test results.
:::

## Syntax

```json
{
  "api_key": "<api-key>",
  "project": "Order App",
  "run": "UI Smoke Test",
}
```

- `api_key` (**string**) - test beats api key. Get it from [TestBeats](https://app.testbeats.com).
- `project` (**string**) - name of the project. *Ex: Order App*
- `run` (**string**) - name of the test run. *Ex: Smoke Tests, API Regression Tests*


## Example

### Configuration

The following config file defines settings for sending test results to two destinations:

- A Slack channel for real-time notifications.
- TestBeats for centralized reporting and analysis.

```json {2-4}
{
  "api_key": "<api-key>",
  "project": "Order App",
  "run": "UI Smoke Test",
  "targets": [
    {
      "name": "slack",
      "inputs": {
        "url": "<slack-incoming-webhook-url>",
        "publish": "test-summary"
      }
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

### Publishing Report

Report your test run results to Slack and TestBeats by running the following command:

```sh
npx testbeats publish -c path/to/report.json
```

Congratulations! You're now equipped with the true power of test result reporting.
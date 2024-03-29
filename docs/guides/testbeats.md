# TestBeats

TestBeats unifies your testing efforts by providing a single source of truth for all your test results.  Say goodbye to sifting through individual reports and hello to a consolidated view of test results, offering a holistic perspective on your software's health.

## Get Started

Don't have a TestBeats account yet? Sign up with your work email at [https://testbeats.com](https://testbeats.com). Once you're signed up, you can create a new organization and generate an API key.

## Syntax

```json
{
  "api_key": "<api-key>",
  "project": "Order App",
  "run": "UI Smoke Test",
}
```

- `api_key` (**string**) - test beats api key.
- `project` (**string**) - name of the project.
- `run` (**string**) - name of the test run. *Ex: Smoke Tests, API Regression Tests*


## Example

The following config file defines settings for sending test results to two destinations:

- A Slack channel for real-time notifications.
- TestBeats for centralized reporting and analysis.

```json {3-9}
{
  "api_key": "some-random-uuid-string",
  "project": "Order App",
  "run": "UI Smoke Test",
  "targets": [
    {
      "name": "slack",
      "inputs": {
        "url": "<incoming-webhook-url>",
        "publish": "test-summary"
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
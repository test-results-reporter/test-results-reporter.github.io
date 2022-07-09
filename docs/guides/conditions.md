# Conditions

We can specify the conditions under which each target, extension to run. By default, a target or extension will have default condition tied to the test results. For example, targets like `slack` or `teams` will run all the times and extensions like `report-portal-analysis` or `mentions` will only run when there are test failures.

### Condition (Test Results)

- `pass`
- `fail`
- `passOrFail`

```json {7,14}
{
  "reports": [
    {
      "targets": [
        {
          "name": "teams",
          "condition": "pass",
          "inputs": {
            "url": "<teams-success-channel-incoming-webhook-url>"
          }
        },
         {
          "name": "teams",
           "condition": "fail",
          "inputs": {
            "url": "<teams-failure-channel-incoming-webhook-url>"
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
  ]
}
```

### Condition (Dynamic)

Conditions can also support javascript expressions that returns a boolean. For example, take a look at enabling a extension based on environment variable `GIT_BRANCH`.

```js {13}
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
              "condition": "{GIT_BRANCH} === 'main'",
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
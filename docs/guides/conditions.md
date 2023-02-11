# Conditions

Conditions allows teams to fine-tune the publishing process to meet their specific needs, ensuring that they receive only the information they require in real-time.

We can specify the conditions under which each target or extension to run. By default, a target or extension will have default condition tied to the test results. For example, targets like `slack` or `teams` will run for all the test runs and extensions like `report-portal-analysis` or `mentions` will only run when there are test failures.

### Condition (Test Results)

- `pass`
- `fail`
- `passOrFail`
- `always`
- `never`

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

### Condition (Function)

The function should return a boolean and it can be asynchronous.

```js {7,14}
const config = {
  "reports": [
    {
      "targets": [
         {
          "name": "teams",
           "condition": async ({ target, result }) => {
              return result.failed > 2;
           },
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
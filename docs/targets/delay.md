# Delay

Pauses execution for a given number of seconds.

## Arguments

#### > seconds (numbers)

No. of seconds to sleep.

> Defaults to `5` seconds

## Examples

```json {5-10}
{
  "reports": [
    {
      "targets": [
        {
          "name": "delay",
          "inputs": {
            "seconds": 10
          }
        },
        {
          "name": "slack",
          "inputs": {
            "url": "<slack-incoming-webhook-url>",
            "publish": "test-summary-slim"
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
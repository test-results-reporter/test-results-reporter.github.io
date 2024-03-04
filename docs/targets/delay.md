# Delay

Pauses execution for a given number of seconds.

## Syntax

```json
{
  "name": "delay",
  "condition": "pass",
  "inputs": {
    "seconds": 5
  }
}
```

- `seconds` (**number**) - no. of seconds to sleep

## Examples

```json {3-8}
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
      "files": [
        "path/to/testng-results.xml"
      ]
    }
  ]
}
```
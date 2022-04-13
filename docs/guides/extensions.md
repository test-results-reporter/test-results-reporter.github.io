# Extensions

Extensions add additional behavior to the targets.

## Supports

Extension types.

✅ [Links](/extensions/links)

✅ [Report Portal Analysis](/extensions/report-portal-analysis)

## Arguments

#### > name (string)

Name of the extension.

#### > condition (string)

Defines the usage of a target.

- `pass`
- `fail`
- `passOrFail`

> Defaults to **passOrFail**

#### > inputs (object)

Custom inputs to the extension.

## Config

Sample partial config file.

```json {9-19}
{
  "targets": [
    {
      "name": "slack",
      "inputs": {
        "url": "<incoming-webhook-url>",
        "publish": "test-summary"
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
  ]
}
```

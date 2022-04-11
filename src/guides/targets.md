# Targets

Targets define where to publish the test results.

## Supports

Target types.

✅ Slack

✅ Teams (Microsoft Teams)

✅ Custom

## Arguments

#### > name (string)

Name of the target.

#### > condition (string)

Defines the usage of a target.

- `pass`
- `fail`
- `passOrFail`

#### > inputs (object)

Custom inputs to the target.

## Config

Sample partial config file.

```json
{
  "targets": [
    {
      "name": "slack",
      "inputs": {
        "url": "<incoming-webhook-url>",
        "publish": "test-summary"
      }
    }
  ]
}
```


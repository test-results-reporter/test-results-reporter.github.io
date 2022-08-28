# Targets

Targets are responsible for publishes the test results to respective entities.

## Supports

Target types.

✅ [Slack](/targets/slack)

✅ [Teams](/targets/teams) (Microsoft Teams)

✅ [Chat](/targets/chat) (Google Chat)

✅ [Custom](/targets/custom)

## Syntax

```json
{
  "name": "slack",
  "condition": "fail",
  "inputs": {}
}
```

- `name` (**string**) - name of the target.
  > `slack`, `teams`, `chat`, `custom`, `delay`
- `condition?` (**[condition](/guides/conditions)**) - condition of execute the target.
- `inputs?` (**object**) - custom inputs to run the target.
- `extensions?` (**[extensions[]](/guides/extensions)**) - list of extensions to be enabled.

## Config

Sample config file.

```json {3-9}
{
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


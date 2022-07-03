# Targets

Targets are responsible for publishes the test results to respective entities.

## Supports

Target types.

✅ [Slack](/targets/slack)

✅ [Teams](/targets/teams) (Microsoft Teams)

✅ [Chat](/targets/chat) (Google Chat)

✅ [Custom](/targets/custom)

## Arguments

#### > name (string)

Name of the target.

#### > condition (string) _(optional)_

Defines the usage of a target.

- `pass`
- `fail`
- `passOrFail`  _(default)_

#### > inputs (object)

Custom inputs to the target.

#### > extensions (object[]) _(optional)_

List of extensions to be enabled on the current target.

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


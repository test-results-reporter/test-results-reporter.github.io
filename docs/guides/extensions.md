# Extensions

Extensions add additional behavior to the targets.

## Supports

Extension types.

✅ [Hyperlinks](/extensions/hyperlinks)

✅ [Mentions](/extensions/mentions)

✅ [ReportPortal Analysis](/extensions/report-portal-analysis)

✅ [ReportPortal History](/extensions/report-portal-history)

✅ [QuickChart Test Summary](/extensions/quick-chart-test-summary)

✅ [Percy Analysis](/extensions/percy-analysis)

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

##### > inputs.title (string)

Title of the extension. _Overrides default title._

> Applicable for most extensions.

##### > inputs.title_link (string)

Title with a clickable link. _Overrides default title link._

> Applicable for most extensions.

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
  ],
  "results": [
    {
      "type": "testng",
      "files": ["path/to/testng-results.xml"]
    }
  ]
}
```

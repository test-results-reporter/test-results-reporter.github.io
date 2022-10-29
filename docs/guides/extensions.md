# Extensions

Extensions add additional behavior to the targets.

## Supports

Extension types.

✅ [Hyperlinks](/extensions/hyperlinks)

✅ [Mentions](/extensions/mentions)

✅ [Metadata](/extensions/metadata)

✅ [ReportPortal Analysis](/extensions/report-portal-analysis)

✅ [ReportPortal History](/extensions/report-portal-history)

✅ [QuickChart Test Summary](/extensions/quick-chart-test-summary)

✅ [Percy Analysis](/extensions/percy-analysis)

✅ [Custom](/extensions/custom)

## Syntax

```json
{
  "name": "hyperlinks",
  "condition": "fail",
  "inputs": {
    "links": [
      {
        "text": "Build Logs",
        "url": "<build-logs-url>"
      }
    ]
  }
}
```

- `name` (**string**) - name of the extension.
  > `hyperlinks`, `mentions`, `report-portal-analysis`, `report-portal-history`, `quick-chart-test-summary`, `percy-analysis`, `custom`
- `condition?` (**[condition](/guides/conditions)**) - condition of execute the extension.
- `hook?` (**string**) - workflow hook to run.
  > `start`, `post-main`, `end`
- `inputs?` (**object**) - custom inputs to run the extension.
  - `title?` (**string**) - title of the extension to be displayed. (*applicable for most extension*)
  - `title_link?` (**string**) - attaches a clickable link to the title. (*applicable for most extension*)

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

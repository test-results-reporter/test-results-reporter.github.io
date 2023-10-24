# InfluxDB

InfluxDB is an open source time series platform. This includes APIs for storing and querying data, processing it in the background for ETL or monitoring and alerting purposes, user dashboards, and visualizing and exploring the data and more.

## Syntax

```json
{
  "name": "influx",
  "inputs": {
    "url": "<influx-url>",
    "db": "PerfTestResults"
  }
}
```

- `url` (**string**) - influxdb url
- `version?` (**string**) - version of the database | v1 or v2
- `db` (**string**) - name of the database
- `username?` (**string**) - username to access database
- `password?` (**string**) - password to access database
- `org?` (**string**) - name of the organization
- `bucket?` (**string**) - name of the bucket
- `token?` (**string**) - auth token
- `measurement_perf_run?` (**string**) - performance run measurement name - Defaults to `PerfRun`
- `measurement_perf_transaction?` (**string**) - performance transaction measurement name - Defaults to `PerfTransaction`
- `measurement_test_run?` (**string**) - test run measurement name - Defaults to `TestRun`
- `measurement_test_suite?` (**string**) - test suite measurement name - Defaults to `TestSuite`
- `measurement_test_case?` (**string**) - test case measurement name - Defaults to `TestCase`
- `tags?` (**object**) - custom key-value pair tags to add
- `fields?` (**object**) - custom key-value pair tags to add


## Examples

Sample config file.

```json {5-15}
{
  "reports": [
    {
      "targets": [
        {
          "name": "influx",
          "inputs": {
            "url": "<influx-url>",
            "db": "TestResults",
            "tags": {
              "Team": "QA",
              "Product": "PactumJS"
            }
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

# Results

This library uses [test-results-parser](https://github.com/test-results-reporter/parser) and [performance-results-parser](https://github.com/test-results-reporter/performance-results-parser)  to read test results from functional and non-functional test frameworks.

## Supports

### Functional Test Results

✅ Mocha (*json & mochawesome*)

✅ TestNG

✅ JUnit

✅ xUnit

✅ Cucumber (*json*)

### Non Functional Test Results

✅ JMeter  (*aggregate.csv*)


## Syntax

```json
// functional
{
  "type": "testng",
  "files": ["path/to/results-file"]
}
```

```json
// non-functional
{
  "type": "jmeter",
  "files": ["tests/data/jmeter/sample.csv"],
  "thresholds": [
    {
      "metric": "Duration",
      "checks": ["avg<5000"]
    }
  ]
}
```

- `type` (**string**) - name of the test results file format.
  > `mocha`, `testng`, `junit`, `xunit`, `cucumber`, `jmeter`

- `files` (**string[]**) - path to the test result files. (*allows `*` wild card*)

- `thresholds` (**object[]**) - pass/fail criteria for test metrics.
  - `metric` (**string**)  - a measure on how a system performs under test conditions.
    > `Samples`, `Duration`, `Errors`, `Data Sent`, `Data Received`
  - `checks` (**string[]**)  - true/false criteria.
    > `sum`, `rate`, `avg`, `min`, `med`, `max`, `p90`, `p95`, `p99`
  - `scope` (**string**) - scope of the threshold to be applied on.
    > `OVERALL`, `TRANSACTION`
  - `transactions` (**string[]**) - list of transactions to apply the current threshold.

## Config

#### Normal (Functional)

Sample config file for a TestNG result file.

```json {11-14}
{
  "targets": [
    {
      "name": "teams",
      "inputs": {
        "url": "<incoming-webhook-url>"
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

#### Normal (Non-Functional)

Sample config file for a JMeter result file.

```json {11-14}
{
  "targets": [
    {
      "name": "teams",
      "inputs": {
        "url": "<incoming-webhook-url>"
      }
    }
  ],
  "results": [
    {
      "type": "jmeter",
      "files": ["path/to/aggregate.csv"]
    }
  ]
}
```

#### Using Thresholds (Non-Functional)

Sample config file for a JMeter result file using thresholds.

```json {11-26}
{
  "targets": [
    {
      "name": "teams",
      "inputs": {
        "url": "<incoming-webhook-url>"
      }
    }
  ],
  "results": [
    {
      "type": "jmeter",
      "files": ["path/to/aggregate.csv"],
      "thresholds": [
        {
          "metric": "Samples",
          "checks": ["sum>1"]
        },
        {
          "metric": "Duration",
          "checks": [ "p95<2000", "avg<2500" ],
          "scope": "TRANSACTION",
          "transactions": ["<transaction-name>"]
        }
      ]
    }
  ]
}
```

#### Wildcards

Merges multiple results into a single result.

> Only `*` wildcard is supported by this tool.

```json {11-14}
{
  "targets": [
    {
      "name": "teams",
      "inputs": {
        "url": "<incoming-webhook-url>"
      }
    }
  ],
  "results": [
    {
      "type": "testng",
      "files": ["path/to/cypress-results-*.xml"]
    }
  ]
}
```
# Results

This library uses [test-results-parser](https://github.com/test-results-reporter/parser) to read test results from different test frameworks.

## Supports

Test results reporter type.

✅ Mocha (Json & mochawesome)

✅ TestNG

✅ JUnit

✅ xUnit

✅ Cucumber (Json)

## Arguments

#### > type (string)

Name of the test runner.
::: details types
- `mocha`
- `testng`
- `junit`
- `xunit`
- `cucumber`
:::

#### > files (string[])

Path to the test result files.

## Config

#### Normal

Sample config file.

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
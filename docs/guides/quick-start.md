# Quick Start

You can either use this library as a command line tool or import as an npm package. For either use cases, first we need to create a sample config file.

### Config File

It includes the details of `targets` and `results`.

```json
{
  "reports": [
    {
      "targets": [
        {
          "name": "teams",
          "inputs": {
            "url": "<teams-incoming-webhook-url>"
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

### Publish Results

To publish the test results, use `npx` to install this library as a command line tool.

```sh
npx test-results-reporter publish -c path/to/config.json
```
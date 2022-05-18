# Quick Start

You can either use this library as a command line tool or import as an npm package. For either use cases, first we need to create a sample config file or object.

## System Requirements

Install Node.js 10 or above.

> In general most of the CI tools will have node.js installed.

## Publish Results

### CLI

Create a config `json` or `js` file that includes list of `targets` and `results`.

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

To publish the test results, use `npx` to install this library as a command line tool.

```sh
npx test-results-reporter publish -c path/to/config.json
```

### Import

Install `test-results-reporter` as a npm package. import into your `js` file.

```shell
npm i test-results-reporter
```

Import the package into your `js` file.

```js
const { publish } = require('test-results-reporter');

const config = {
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
};

await publish({ config });
```

Run the file using node.js

```shell
node report.js
```
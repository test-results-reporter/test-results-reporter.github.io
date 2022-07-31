# Quick Start

You can either use this library as a command line tool or import as an npm package. For either use cases, first we need to create a sample config file or object.

## Installation

### NPM

Install this tool via `npm`.

```shell
npm i test-results-reporter
```

Or directly execute via `npx`.

```sh
npx test-results-reporter publish -c path/to/config.json
```

The above two methods require Node.js version 12 and above to be installed.

### Direct

Directly download the executable via `curl`.

```sh
curl https://raw.githubusercontent.com/test-results-reporter/reporter/main/scripts/download.sh | bash
```

Based on your operating system, run the executable. Fo example in linux,

```sh
./test-results-reporter-linux publish -c path/to/config.json
```

## Config File

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

To publish the test results, use `npx`.

```sh
npx test-results-reporter publish -c path/to/config.json
```

### Import

Import the package into your `js` file.

```js
const { publish, defineConfig } = require('test-results-reporter');

const config = defineConfig({
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
});

await publish({ config });
```

To publish the test results, run the file using `node`.

```shell
node report.js
```
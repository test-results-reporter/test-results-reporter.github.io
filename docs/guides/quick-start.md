# Quick Start

You can either download this library directly as a command line tool or install it as an `npm` package. For either use cases, we need to create a `js` or `json` config file.

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

Based on your operating system, run the executable. For example in linux OS after the completion of download, run the following command 

```sh
./test-results-reporter-linux publish -c path/to/config.json
```

## Config File

Create a `json` or `js` config file that includes list of `targets` and `results`.

::: code-group

```json [config.json]
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
      "files": [
        "path/to/testng-results.xml"
      ]
    }
  ]
}
```

```js [config.js]
module.exports = {
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
```

:::

To publish the test results, use `npx`.

```sh
npx test-results-reporter publish -c path/to/config.json
```

### Import

Import the package into your `js` file.

```js
const { publish, defineConfig } = require('test-results-reporter');

const config = defineConfig({
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
});

await publish({ config });
```

To publish the test results, run the file using `node`.

```shell
node report.js
```

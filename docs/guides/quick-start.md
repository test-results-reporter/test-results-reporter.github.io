# Quick Start

This guide walks you through creating a configuration file for sending automation test results to a Slack channel or Microsoft Teams channel or Google Chat.

## 1. Create Config File

Create a new file, perhaps named `config.json` or even `config.js`. This configuration file adopts the JSON structure, utilizing key-value pairs for setting definitions. Throughout the documentation, JSON files are used for defining configuration.

```json
{}
```

## 2. Specify Test Results File

This section defines the test results files that the reporter will process.

- `type` (string): This specifies the type of testing framework used to generate the results file. It supports various popular test results formats - `junit`, `testng`, `cucumber`, `xunit`, `mocha`, `jmeter`, etc.

- `files` (array): This list contains the paths to your test results files (XML files for TestNG and JUnit). You can add multiple paths if you have multiple results files or use wildcard expressions.

You can find more details in the documentation [Results](/guides/results).

```json
{
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

## 3. Specify Targets


This section defines where you want to send your test results. In this case, we'll have one target: Slack.

- `name` (string): This specifies the name for this target. Set it to "slack".
- `inputs` (object): This object contains configurations specific to the chosen target.
  - `url` (string): To send reports to a slack channel, we need to create a incoming webhook url. Follow this [docs](https://api.slack.com/messaging/webhooks) to create one.


You can find more details in the documentation [Targets](/guides/targets) and [Slack](/targets/slack).


```json
{
  "targets": [
    {
      "name": "slack",
      "inputs": {
        "url": "<slack-incoming-webhook-url>"
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

## 4. Publishing Results

We can publish results either via `curl`, `npx` or `npm`

### Curl

Download the executable via `curl`.

```sh
curl https://raw.githubusercontent.com/test-results-reporter/testbeats/main/scripts/download-latest.sh | bash
```

After download completes, run the executable based on you operating system.

```sh
# linux
./testbeats-linux publish -c path/to/config.json
```

### npx

Directly execute via `npx`.

```sh
npx testbeats publish -c path/to/config.json
```

### npm

Install the package via `npm`.

```sh
npm i testbeats
```

Import the package into your `js` file.

```js
const { publish, defineConfig } = require('testbeats');

const config = defineConfig({
  "targets": [
    {
      "name": "slack",
      "inputs": {
        "url": "<slack-incoming-webhook-url>"
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
});

await publish({ config });
```

```sh
node report.js
```

::: info
*Now your test results are sliding into Slack faster than a penguin on ice. Sit back and enjoy.*
:::
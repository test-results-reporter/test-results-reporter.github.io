# Testing Frameworks

## Cucumber

> TODO

## Mocha

This tool can either consume the default [json](https://mochajs.org/#json) reporter or the [jUnit](https://www.npmjs.com/package/mocha-junit-reporter) reporter for publishing test results.

#### JSON Reporter

Run tests by updating the default reporter to `json`.

```shell
mocha tests --reporter json
```

Sample `report.json` file

```json
{
  "targets": [
    {
      "name": "slack",
      "inputs": {
        "url": "<incoming-webhook-url>"
      }
    }
  ],
  "results": [
    {
      "type": "mocha",
      "files": ["path/to/result.json"]
    }
  ]
}
```

#### jUnit Reporter

Run tests by installing the junit reporter by updating the default reporter to `junit`.

```shell
npm install mocha-junit-reporter --save-dev
mocha test --reporter mocha-junit-reporter
```

Sample `report.json` file

```json
{
  "targets": [
    {
      "name": "chat",
      "inputs": {
        "url": "<incoming-webhook-url>"
      }
    }
  ],
  "results": [
    {
      "type": "junit",
      "files": ["path/to/results.xml"]
    }
  ]
}
```

::: tip
Enable multiple reporters by using one of the following packages

- [mocha-multi](https://www.npmjs.com/package/mocha-multi)
- [mocha-multi-reporters](https://www.npmjs.com/package/mocha-multi-reporters)
:::

## TestNG

If you are using Maven, you can run it from the cmd line really easy, cd into the directory with the testng.xml

```shell
mvn clean test -DsuiteXmlFile=testng.xml -Dreporter=org.testng.reporters.XMLReporter
```




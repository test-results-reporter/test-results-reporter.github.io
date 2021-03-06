# Custom

Send results to custom targets.

## Inputs

#### > load (string | Function)

- it could be the path of the file to load which exports a `run` function.
- it could be a function

## Examples

### file path

Config file.

```json {5-11}
{
  "reports": [
    {
      "targets": [
        {
          "name": "custom",
          "inputs": {
            "load": "./custom.js"
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

custom js file

```js
async function run({ target, result }) {
  // custom code
}

module.exports = {
  run
}
```

### function

```js
module.exports = {
  "reports": [
    {
      "targets": [
        {
          "name": "custom",
          "inputs": {
            "load": async ({ result }) => { }
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
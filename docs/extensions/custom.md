# Custom

Attach custom extensions.

## Syntax

```json
{
  "name": "custom",
  "condition": "passOrFail",
  "inputs": {
    "load": "./custom.js"
  }
}
```

- `load` (**string|function**)
  - it could be the path of the file to load which exports a `run` function.
  - it could be a function

## Examples

### File Path

Config file.

```json {5-11}
{
  "targets": [
    {
      "name": "teams",
      "inputs": {
        "url": "<some-url>"
      },
      "extensions": [
        {
          "name": "custom",
          "inputs": {
            "load": "./custom.js"
          }
        }
      ]
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

custom js file

```js
async function run({ target, result, payload, root_payload }) {
  // custom code
}

module.exports = {
  run,
};
```

### Function

```js
module.exports = {
  targets: [
    {
      name: "teams",
      inputs: {
        url: "<some-url>",
      },
      extensions: [
        {
          name: "custom",
          inputs: {
            load: async ({ result }) => {},
          },
        },
      ],
    },
  ],
  results: [
    {
      type: "testng",
      files: ["path/to/testng-results.xml"],
    },
  ],
};
```

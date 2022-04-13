# Environment Variables

In most scenarios, the values in config file are dynamic and can be represented through environment variables. To use environment variables in the config file, wrap the environment variable name inside `{}`.

## Config

Sample partial config file.

```json {6}
{
  "targets": [
    {
      "name": "teams",
      "inputs": {
        "url": "{TEAMS_URL}",
        "publish": "test-summary"
      }
    }
  ]
}
```

## .env file

This library also reads all environment variables defined in `.env` file. 

::: warning LIMITATIONS
- `.env` file should be located at the same path where these library is getting invoked.
:::
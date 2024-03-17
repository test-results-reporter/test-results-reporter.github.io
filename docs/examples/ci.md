# CI & CD

## Azure DevOps (Pipelines)

Azure Pipelines automatically builds and tests code projects to make them available to others. It works with just about any language or project type. Azure Pipelines combines continuous integration (CI) and continuous delivery (CD) to test and build your code and ship it to any target.

Using this tool in Azure Pipelines is very easy and straightforward. Most of the azure build agents has Node.js installed by default. So just add a custom script in your yaml file to publish test results - `npx test-results-reporter publish -c path/to/report.json`

Let’s look at an example of running Java TestNG automation tests. 

#### pipeline.yaml

Make sure to add `continueOnError: true` in the maven task.

```yaml
pool:
  vmImage: windows-latest
  
steps:
  - task: JavaToolInstaller@0
    inputs:
      versionSpec: '11'
      jdkArchitectureOption: x64
      jdkSourceOption: PreInstalled
  - task: Maven@3
    displayName: Running Tests
    continueOnError: true
    inputs:
      mavenPomFile: pom.xml
      publishJUnitResults: true
      testResultsFiles: '**/surefire-reports/TEST-*.xml'
      javaHomeOption: JDKVersion
      mavenVersionOption: Default
      mavenAuthenticateFeed: true
      effectivePomSkip: false
      options: test -Dsurefire.suiteXmlFiles=resources/testng.xml
  - script: npx test-results-reporter publish -c resources/report.json
    displayName: Reporting Results
    env:
      BUILD_URL: $(System.TeamFoundationCollectionUri)$(System.TeamProject)/_build/results?buildId=$(Build.BuildId)
```

#### report.json

Notice, how we are using the environment variable `BUILD_URL` in the report.json file.

```json
{
  "targets": [
    {
      "name": "teams",
      "inputs": {
        "url": "<teams-url>",
        "publish": "test-summary-slim"
      },
      "extensions": [
        {
          "name": "hyperlinks",
          "inputs": {
            "links": [
              {
                "text": "Logs",
                "url": "{BUILD_URL}"
              }
            ]
          }
        }
      ]
    }
  ],
  "results": [
    {
      "type": "testng",
      "files": [
        "target/surefire-reports/testng-results.xml"
      ]
    }
  ]
}
```


## GitHub Actions

GitHub Actions is a continuous integration and continuous delivery (CI/CD) platform that allows you to automate your build, test, and deployment pipeline. You can create workflows that build and test every pull request to your repository, or deploy merged pull requests to production.

Let’s look at an example of workflow. 

```yml
name: Test
on:
  pull_request:
    branches: 
      - main
jobs:
  publish:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '20.x'
          registry-url: 'https://registry.npmjs.org'
      
      # intermediary steps to run tests

      - run: npx test-results-reporter publish -c path/to/report.json
        if: ${{ always() }}
        env:
          SLACK_URL: ${{ secrets.SLACK_URL }}
```

## Jenkins

> TODO

# Serverless GraphQL Echo Example

[![serverless](http://public.serverless.com/badges/v3.svg)](http://www.serverless.com)

A GraphQL "echo" example that uses Serverless v1.0. This is simply meant to be a convenient way to get up and running in order to explore using them in conjunction and nothing more at this point.

## Usage

### Deploy
`npm run deploy` will run the tests then deploy to AWS

### Test
`npm test` will run the tests and `npm run coverage` will give you the test coverage.

### Run a function locally
`npm run invoke` will invoke the handler locally with `event.json`

### Simulate API Gateway locally
`npm run serve` will run a local simulation of API Gateway based on your `serverless.yml` configuration on port 8000.

### Additional Information
For more detailed useage check out the repository for [Serverless Webpack](https://github.com/elastic-coders/serverless-webpack) for more information, specifically:

* [Automatic bundling](https://github.com/elastic-coders/serverless-webpack#automatic-bundling)
* [Simulate API Gateway locally](https://github.com/elastic-coders/serverless-webpack#simulate-api-gateway-locally)
* [Run a function locally](https://github.com/elastic-coders/serverless-webpack#run-a-function-locally)

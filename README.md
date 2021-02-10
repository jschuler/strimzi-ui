[![License](https://img.shields.io/badge/license-Apache--2.0-blue.svg)](http://www.apache.org/licenses/LICENSE-2.0)
[![Twitter Follow](https://img.shields.io/twitter/follow/strimziio.svg?style=social&label=Follow&style=for-the-badge)](https://twitter.com/strimziio)

# Strimzi UI

This repository contains the Strimzi UI and its implementation.
Strimzi UI provides a way for managing Strimzi and Kafka clusters (+ other components) deployed by it using a graphical user interface.

This UI is currently not in a state where it can be used. Is it still early on in it's development but we hope to have something usable very soon! If you're interested in what we're working on, please [view our project board](https://github.com/orgs/strimzi/projects/2). If you're interested in contributing, please [view our contribution guidelines]('./docs/Condribution.md).

## Getting started

This UI uses `npm` to provide dependency management, and `yarn` for building each of the modulizes that make up the UI. If you wish to develop the UI, you will need:

- [npm version 6.14.8 or later](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- [node 14.15.0 or later](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- [Yarn Package Manager 1.22 or later](https://yarnpkg.com/) which can be installed by running the following command after installing npm and node:
  
    `npm install yarn -g'

Once these prerequisites are met, all required dependencies to build and run the UI can be downloaded by running the following command:

```
yarn install
```

The Strimzi-UI can be developed while making use of TLS certificates between server and client, as would be the case in a typical production deployment. The [`openssl`](https://www.openssl.org/) tool and configuration (used via the `yarn addDevCerts` command) can generate representative development time certificates for this purpose, given `openssl` is installed for your operating system. This is not required however to develop the UI.

If you run into any issues while working in this repo, please check out [the troubleshooting guide](#troubleshooting).

### Helpful commands

Node package manager scripts are provided for common tasks. These include:

- `yarn test` - runs all tests for the client and server
  - `yarn addDevCerts` - requires `openssl`, will generate certificates for development purposes for UI development
- `yarn start:carbon` - runs the Carbon version of the UI client and server in development mode
- `yarn start:patternfly` - runs the PatternFly version of the UI client and server in development mode
- `yarn build` - builds all of the UIs
- `yarn clean` - deletes the build/generated content directories
- `yarn lint` - lints the codebase. See [`Linting`](./docs/Linting.md) for the individual linting steps
- `yarn storybook` - runs [Storybook](./docs/Architecture.md#storybook) for the UI components.

## Implementation documentation

Further details around how this UI is implemented can be found below:

- [Architecture](./docs/Architecture.md)
- [Build](./docs/Build.md)
- [Linting](./docs/Linting.md)
- [Test](./docs/Test.md)
- [Contribution](./docs/Contribution.md)
- [Coding Standards](./docs/Coding.md)

## Troubleshooting

Currently there are no known issues.

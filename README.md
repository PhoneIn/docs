# Website

This website is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator.

We are currently in document only mode: https://v2.docusaurus.io/docs/docs-introduction#docs-only-mode

If we want to bring back the home page, blog page, or add additional plugins, that can be done.

[![Netlify Status](https://api.netlify.com/api/v1/badges/8f5ecef5-5e15-4ca5-a92f-cbf979a8230f/deploy-status)](https://app.netlify.com/sites/elegant-meitner-d5e4de/deploys)

## Installation

```console
yarn install
```

## Local Development

```console
yarn start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

## Build

```console
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

```console
GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

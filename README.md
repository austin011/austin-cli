# austin-cli

A CLI build tool that allows you to quickly start a Node + strict TypeScript project.

## Installation
- with NPM
```bash
npm i --global austin-cli@latest
```
- with Yarn
```bash
yarn global add austin-cli@latest
```

## Use
```bash
npx austin-cli <command> <...args>
```

## Commands
```bash
npx austin-cli create <name> [packages...]
```
Creates a light, strict TypeScript app with little boilerplate. Includes `tsup`, `typescript`, `nodemon`, `@types/node` by default.



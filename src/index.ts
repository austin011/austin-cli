#!/usr/bin/env node

import { Command } from "commander";
import { writeFileSync, readFileSync } from "fs";
import { config } from "../utils/tsconfig";
import { exec } from "child_process";

const program = new Command();

program.command("create <name> [additionalPackages...]").action(create);

program.parse(process.argv);

async function create(name: string, additionalPackages: string[]) {
  console.log("Creating app structure");

  await execute(`mkdir ${name}`);
  await execute(
    `cd ${name} && yarn init -y && yarn add -D typescript @types/node ts-node nodemon tsup`
  );

  if (additionalPackages.length > 0) {
    await execute(`cd ${name} && yarn add ${additionalPackages.join(" ")}`);
  }

  await execute(`cd ${name} && mkdir src`);

  writeFileSync(`./${name}/src/index.ts`, "", "utf-8");
  writeFileSync(`./${name}/tsconfig.json`, JSON.stringify(config), "utf-8");

  const json = readFileSync(`./${name}/package.json`, "utf-8");
  const packageJson = JSON.parse(json);

  packageJson.scripts = {
    start: "nodemon --watch src --exec ts-node src/index.ts",
    build: "tsup src/index.ts --format cjs --minify",
  };

  writeFileSync(
    `./${name}/package.json`,
    JSON.stringify(packageJson, null, 2),
    "utf-8"
  );
}

async function execute(command: string): Promise<void> {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        reject(error);
      } else {
        console.log(stdout);
        resolve();
      }
    });
  });
}

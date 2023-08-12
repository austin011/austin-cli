#!/usr/bin/env node

import { Command } from "commander";
import { writeFileSync } from "fs";

const program = new Command();

program.version("1.0.0").description("CLI tool for generating config files");

program
  .command("tsconfig init")
  .description("Generate a populated tsconfig.json file")
  .action(generateTsConfig);

program.parse(process.argv);

function generateTsConfig() {
  console.log("Generating tsconfig.json file");

  const tsConfig = {
    compilerOptions: {
      target: "esnext",
      module: "esnext",
      lib: ["es6", "es7", "esnext", "dom"],
      allowJs: true,
      jsx: "react",
      removeComments: false,
      strict: true,
      noImplicitAny: true,
      strictNullChecks: true,
      strictFunctionTypes: true,
      strictPropertyInitialization: true,
      noImplicitThis: true,
      alwaysStrict: true,
      noUnusedLocals: true,
      noUnusedParameters: true,
      noImplicitReturns: true,
      noFallthroughCasesInSwitch: true,
      moduleResolution: "node",
      baseUrl: ".",
      allowSyntheticDefaultImports: true,
      esModuleInterop: true,
      inlineSourceMap: true,
      inlineSources: true,
    },
    include: ["src/**/*"],
  };

  writeFileSync("tsconfig.json", JSON.stringify(tsConfig), "utf-8");
}

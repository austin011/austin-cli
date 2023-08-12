var t = require("commander"),
  n = require("fs"),
  e = new t.Command();
e.version("1.0.0").description("CLI tool for generating config files");
e.command("tsconfig init")
  .description("Generate a populated tsconfig.json file")
  .action(o);
e.parse(process.argv);
function o() {
  console.log("Generating tsconfig.json file"),
    (0, n.writeFileSync)(
      "tsconfig.json",
      JSON.stringify({
        compilerOptions: {
          target: "esnext",
          module: "esnext",
          lib: ["es6", "es7", "esnext", "dom"],
          allowJs: !0,
          jsx: "react",
          removeComments: !1,
          strict: !0,
          noImplicitAny: !0,
          strictNullChecks: !0,
          strictFunctionTypes: !0,
          strictPropertyInitialization: !0,
          noImplicitThis: !0,
          alwaysStrict: !0,
          noUnusedLocals: !0,
          noUnusedParameters: !0,
          noImplicitReturns: !0,
          noFallthroughCasesInSwitch: !0,
          moduleResolution: "node",
          baseUrl: ".",
          allowSyntheticDefaultImports: !0,
          esModuleInterop: !0,
          inlineSourceMap: !0,
          inlineSources: !0,
        },
        include: ["src/**/*"],
      }),
      "utf-8"
    );
}

export const config = {
  compilerOptions: {
    target: "es6",
    module: "commonjs",
    moduleResolution: "node",
    allowSyntheticDefaultImports: true,
    allowJs: true,
    importHelpers: true,
    jsx: "react",
    alwaysStrict: true,
    sourceMap: true,
    forceConsistentCasingInFileNames: true,
    noFallthroughCasesInSwitch: true,
    noImplicitReturns: true,
    noUnusedLocals: true,
    noUnusedParameters: true,
    noImplicitAny: false,
    noImplicitThis: false,
    strictNullChecks: false,
    outDir: "./build",
    baseUrl: ".",
    paths: {
      "@server/*": ["src/*"],
      "@tests/*": ["__tests__/*"],
      "@config/*": ["src/config/*"],
      "@domain/*": ["src/domain/*"],
      "@controller/*": ["src/controller/*"],
      "@middleware/*": ["src/middleware/*"],
    },
  },
  include: ["src/**/*"],
  exclude: ["node_modules", "build"],
} as const;

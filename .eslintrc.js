// .eslintrc.js in the root directory
module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
  },
  parser: "@typescript-eslint/parser",
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  plugins: ["@typescript-eslint"],
  rules: {
    // shared rules
  },
  overrides: [
    {
      files: ["frontend/**/*"],
      env: {
        browser: true,
      },
      extends: ["plugin:react/recommended"],
      settings: {
        react: {
          version: "detect",
        },
      },
    },
    {
      files: ["backend/**/*"],
      env: {
        node: true,
      },
    },
  ],
};

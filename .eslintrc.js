module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
    "jest/globals": true,
  },
  extends: [
    "airbnb",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:jsx-a11y/recommended",
    "prettier",
    "plugin:cypress/recommended",
  ],
  parser: "@babel/eslint-parser",
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
    requireConfigFile: "false",
    jsx: true,
  },
  plugins: [
    "html",
    "react",
    "react-hooks",
    "jsx-a11y",
    "markdown",
    "react-hooks",
    "import",
    "prettier",
  ],
  settings: {
    react: {
      version: "detect",
    },
    jest: {
      version: 26,
    },
  },
  overrides: [
    {
      files: ["*.html"],
      parser: "@html-eslint/parser",
      extends: ["plugin:@html-eslint/recommended"],
    },
    {
      files: ["src/**/*.test.js"],
      plugins: ["jest"],
      rules: {
        "jest/expect-expect": "error",
      },
      extends: ["plugin:jest/recommended"],
    },
  ],
  rules: {
    "prettier/prettier": [
      0,
      {
        endOfLine: "auto",
      },
    ],
    "no-use-before-define": "off",
    "no-shadow": "off",
    "no-undef": "off",
    "dot-notation": "off",
    "operator-assignment": "off",
    "prefer-arrow-callback":"off",
    "no-param-reassign":"off",
    "no-unused-vars": "off",
    "no-param-reassign": "off",
    "no-plusplus": "off",
    "react/jsx-filename-extension": "off",
    "import/prefer-default-export": "off",
    "prefer-destructuring": "off",
    "object-shorthand": "off",
    "react/jsx-props-no-spreading": "off",
    "arrow-body-style": "off",
    "no-underscore-dangle": "off",
    "react/forbid-prop-types": "off",
    "react/prop-types": "off",
    "no-unused-expressions": "off",
    "jsx-a11y/label-has-for": [
      0,
      {
        required: {
          some: ["nesting", "id"],
        },
      },
    ],
  },
};

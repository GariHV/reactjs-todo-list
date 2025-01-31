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
    "no-restricted-globals":"off",
    "import/no-unresolved": "off",
    "no-lone-blocks": "off",
    "react/self-closing-comp":"off",
    "jsx-a11y/heading-has-content":"off",
    "no-nested-ternary":"off",
    "radix":"off",
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    "no-return-await":"off",
    "consistent-return":"off",
    "import/named":"off",
    "import/namespace":"off",
    "no-self-compare": "off",
    "react/react-in-jsx-scope":"off",
    "prefer-template":"off",
    "no-restricted-syntax":"off",
    "no-use-before-define": "off",
    "no-shadow": "off",
    "no-undef": "off",
    "dot-notation": "off",
    "operator-assignment": "off",
    "prefer-arrow-callback":"off",
    "no-param-reassign":"off",
    "no-unused-vars": "off",
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

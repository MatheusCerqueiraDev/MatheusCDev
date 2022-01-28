module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },

  extends: [
    "next/core-web-vitals",
    "plugin:react/recommended",
    "airbnb",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",

    // 'plugin:import/errors',
    // 'plugin:import/warnings',
    // 'plugin:import/typescript',
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "react-hooks", "@typescript-eslint", "prettier"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "unused-imports/no-unused-imports": "off",
    "react/jsx-uses-react": "error",
    // 'react/jsx-uses-vars': 'error',
    "prettier/prettier": "error",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/jsx-filename-extension": [1, { extensions: [".tsx"] }],
    "import/prefer-default-export": "off",
    "@typescript-eslint/no-use-before-define": "off",
    // '@typescript-eslint/explicit-function-return-type': 'off',
    // '@typescript-eslint/no-unused-vars': 'off',
    "@typescript-eslint/no-unused-imports": "off",
    // '@typescript-eslint/no-unused-vars':
    //   process.env.NODE_ENV === 'production' ? 'error' : 'warn',

    "no-use-before-define": "off",
    "@typescript-eslint/explicit-module-boundary-types": ["off"],
    "react/jsx-props-no-spreading": "off",
    "no-param-reassign": ["error", { props: false }],
    // '@typescript-eslint/explicit-function-return-type': 'off',
    // '@typescript-eslint/explicit-function-return-type': ['off'],
    // '@typescript-eslint/explicit-function-return-type': [
    //   'warn',
    //   {
    //     allowExpressions: true,
    //   },
    // ],
    "@typescript-eslint/explicit-function-return-type": "off",

    "react/function-component-definition": [
      2,
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],

    // '@typescript-eslint/explicit-function-return-type': {
    //   allowExpressions: true,
    // },
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
    // 'import/extensions': [
    //   'error',
    //   'ignorePackages',
    //   {
    //     ts: 'never',
    //     tsx: 'never',
    //   },
    // ],
  },
  settings: {
    react: { version: "detect" },
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
      typescript: {},
    },
  },
};

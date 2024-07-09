module.exports = {
  extends: [
    "next/core-web-vitals",
    "plugin:import/recommended",
    "plugin:import/warnings",
    "prettier",
    "plugin:storybook/recommended"
  ],
  rules: {
    "import/order": [
      "error",
      {
        alphabetize: {
          order: "asc",
        },
      },
    ],
    "import/no-unresolved": "off",
  },
};

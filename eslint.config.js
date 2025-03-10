import majacoPlugin from "@majaco/eslint-plugin-react";
import storybookPlugin from "eslint-plugin-storybook";

export default [
  ...majacoPlugin.configs.recommended,
  {
    files: ["src/**/*.ts", "src/**/*.tsx"],
    plugins: {
      majacoPlugin,
      storybookPlugin,
    },
    rules: {
      "jsx-a11y/control-has-associated-label": "warn",
      "jsx-a11y/label-has-associated-control": "warn",
      "react/no-unknown-property": ["error", { ignore: ["css"] }],
    },
  },
];

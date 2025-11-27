import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,

  {
    rules: {
      "semi": ["error", "always"],

      "quotes": ["error", "double", { avoidEscape: true }],
      "object-curly-spacing": ["error", "always"],
      "react/jsx-curly-spacing": ["error", {
        when: "always",
        children: true,
      }],
      "comma-dangle": ["error", "always-multiline"],

      "react-hooks/rules-of-hooks": "error",

      "react-hooks/exhaustive-deps": "warn",

      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],

      "@typescript-eslint/no-explicit-any": "warn",

      "no-unused-vars": "off", // Disable base rule
      "@typescript-eslint/no-unused-vars": ["warn"],

      "react/self-closing-comp": "error",

      "react/jsx-no-useless-fragment": "warn",

      "react/react-in-jsx-scope": "off",
    },
  },

  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;

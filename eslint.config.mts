import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";

export default [
  ...tseslint.configs.recommended,
  {
    rules: {
      curly: "error",
      eqeqeq: "error",
      "no-console": "warn",
      "@typescript-eslint/no-unused-vars": "warn"
    }
  }
]

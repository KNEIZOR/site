import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import { defineConfig, globalIgnores } from "eslint/config";
import i18next from "eslint-plugin-i18next";

export default defineConfig([
    {
        files: ["**/*.{ts,tsx}"],
        plugins: { js, react: pluginReact },
        extends: ["js/recommended"],
        languageOptions: { globals: globals.browser },
        settings: {
            react: {
                version: "detect",
            },
        },
    },
    tseslint.configs.recommended,
    pluginReact.configs.flat.recommended,
    i18next.configs["flat/recommended"],
    globalIgnores([
        "**/node_modules/*",
        "**/ThemeContext.ts",
        "**/routeConfig.tsx",
        "**/AppLink.tsx",
        "**/Button.tsx",
    ]),
    {
        rules: {
            "react/react-in-jsx-scope": "off",
            "@typescript-eslint/no-unused-vars": "warn",
        },
    },
]);

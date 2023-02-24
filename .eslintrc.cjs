/** @type {import("eslint").Linter.Config} */
module.exports = {
  overrides: [
    {
      extends: [
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
      ],
      files: ["*.ts", "*.tsx"],
      parserOptions: {
        project: "tsconfig.json",
      },
    },
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
  },
  plugins: ["@typescript-eslint", "import", "unused-imports"],
  extends: ["next/core-web-vitals", "plugin:@typescript-eslint/recommended"],
  rules: {
    "@typescript-eslint/consistent-type-imports": [
      "warn",
      {
        prefer: "type-imports",
        fixStyle: "inline-type-imports",
      },
    ],
    "unused-imports/no-unused-imports": "warn",
    "import/order": [
      // 順番が間違っていた時の警告方法
      "warn",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
          "object",
          "type",
        ],
        // それぞれのgroupsとの間は1行分空ける。
        "newlines-between": "always",
        pathGroupsExcludedImportTypes: ["builtin"],
        // 大文字小文字関係なくアルファベット順にする。
        alphabetize: { order: "asc", caseInsensitive: true },
      },
    ],
  },
};

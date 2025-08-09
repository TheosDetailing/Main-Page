export default [
  {
    files: ["assets/**/*.js"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "script",
      globals: { window: "readonly", document: "readonly" }
    },
    rules: {}
  }
];

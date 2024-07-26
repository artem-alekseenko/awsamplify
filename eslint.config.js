import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";


export default [
  {files: ["**/*.{js,mjs,cjs,ts,vue}"]},
  {languageOptions: { globals: {...globals.browser, ...globals.node} }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs["flat/essential"],
  {
    files: ['**/*.vue'],
    plugins: {
      'typescript-eslint': tseslint.plugin
    },
    rules: {
      'vue/multi-word-component-names': 'error'
    },
    languageOptions: {
      parserOptions: {
        parser: '@typescript-eslint/parser'
      }
    }
  },
  {
    files: ['app.vue', 'error.vue', 'pages/**/*.vue', 'layouts/**/*.vue'],
    rules: {
      'vue/multi-word-component-names': 'off'
    },
  },
  {
    ignores: ['node_modules', 'dist', 'public', '.nuxt']
  },
];
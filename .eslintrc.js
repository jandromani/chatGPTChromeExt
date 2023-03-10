// .eslintrc.js

module.exports = {
    env: {
      browser: true,
      es6: true
    },
    extends: [
      'eslint:recommended',
      'plugin:vue/recommended'
    ],
    parserOptions: {
      ecmaVersion: 2018,
      sourceType: 'module'
    },
    plugins: [
      'vue'
    ],
    rules: {
      'no-console': 'off'
    }
  };
  
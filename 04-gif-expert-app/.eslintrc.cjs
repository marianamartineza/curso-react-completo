module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: ['plugin:react/recommended', 'standard', 'eslint-config-prettier'],
  overrides: [],
  settings: {
    react: {
      version: 'detect',
    },
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: { 'react/react-in-jsx-scope': 'off' },
};

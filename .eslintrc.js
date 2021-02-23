module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: ['plugin:react/recommended', 'eslint:recommended', 'react-app'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  parser: 'babel-eslint',
  rules: {
    'max-len': ['error', { code: 100, ignoreComments: true }],
    'linebreak-style': 'off',
    'object-curly-newline': 'off',
    'arrow-parens': ['error', 'as-needed'],
    'implicit-arrow-linebreak': 'off',
    'function-paren-newline': 'off',
    'import/prefer-default-export': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js'] }],
    'no-confusing-arrow': 'off',
    'react/jsx-props-no-spreading': ['off'],
    'react/jsx-one-expression-per-line': 'off',
    'no-use-before-define': 'off',
    'no-unused-expressions': 'off',
    'import/no-named-as-default': 'off',
    'no-shadow': 'off',
    'no-console': 'off',
  },
};

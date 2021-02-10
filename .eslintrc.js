module.exports = {
  parser: 'babel-eslint',
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  plugins: ['babel'],
  rules: {
    'babel/new-cap': 1,
    'babel/no-invalid-this': 1,
    'babel/semi': 1,
    'babel/no-unused-expressions': 1,
    'react/jsx-filename-extension': 0,
  },
  env: {
    browser: true,
    node: true,
    jest: true,
  },
};

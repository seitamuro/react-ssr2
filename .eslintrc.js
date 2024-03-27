module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  rules: {
    'no-undefined': 'off',
    'react/jsx-uses-react': 'off',
    'react/prop-types': ['off'],
    'react/react-in-jsx-scope': 'off',
  },
  settings: {
    react: {
      version: '18.2.0',
    },
  },
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react'],
  extends: ['plugin:@typescript-eslint/recommended'],
};

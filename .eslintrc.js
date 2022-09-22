module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  extends: ['plugin:@typescript-eslint/recommended', 'airbnb', 'airbnb-typescript', 'plugin:prettier/recommended'],
  plugins: [],
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/no-unused-vars': 'warn',
  },
};

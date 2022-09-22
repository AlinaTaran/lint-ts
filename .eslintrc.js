module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  extends: ['plugin:@typescript-eslint/recommended', 'airbnb', 'airbnb-typescript', 'plugin:prettier/recommended'],
  plugins: ['simple-import-sort'],
  ignorePatterns: ['.eslintrc.js', 'webpack.config.js'],
  rules: {
    '@typescript-eslint/no-unused-vars': 'warn',
    // Imports
    'simple-import-sort/exports': 'error',
    'import/first': 'error',
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          // Npm packages.
          ['^@?\\w'],
          // Internal
          ['^(~components|~utils)(/.*|$)'],
          // Side effect imports
          ['^\\u0000'],
          // Parent imports. Put `..` last
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
          // Other relative imports. Put same-folder imports and `.` last
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
        ],
      },
    ],
  },
};

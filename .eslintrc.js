module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'brace-style': ['error', '1tbs', { allowSingleLine: false }],
    curly: ['error', 'all'],
    indent: 'off',
    'linebreak-style': ['error', 'unix'],
    'max-len': ['error', { code: 80 }],
    'no-case-declarations': 'off',
    'no-console': 'warn',
    'no-unused-vars': 'off', // covered by '@typescript-eslint/no-unused-vars'
    quotes: ['error', 'single', { avoidEscape: true }],
    'react/display-name': 'off',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    semi: ['error', 'always'],
    'sort-imports': 'off',
    '@typescript-eslint/ban-ts-comment': 'warn', // while tslint is in use
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-unused-vars': ['warn', { ignoreRestSiblings: true }],
    'prettier/prettier': 'warn',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};

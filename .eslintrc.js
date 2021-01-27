module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/typescript/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
    '@vue/prettier',
    '@vue/prettier/@typescript-eslint',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/array-type': ['error', { default: 'array' }],
    '@typescript-eslint/explicit-module-boundary-types': ['error'],
    '@typescript-eslint/explicit-function-return-type': ['error'],
    '@typescript-eslint/explicit-member-accessibility': ['error', { accessibility: 'explicit' }],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  },
  overrides: [
    {
      files: ['**/tests/**/*.spec.ts'],
      env: {
        jest: true,
      },
    },
  ],
};

module.exports = {
    root: true,
    env: {
        node: true,
    },
    parser: '@typescript-eslint/parser',
    extends: [
        'plugin:vue/vue3-essential',
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        '@vue/typescript/recommended',
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended',
        '@vue/prettier',
        '@vue/prettier/@typescript-eslint',
    ],
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
    },
    rules: {
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/array-type': ['error', { default: 'array' }],
        '@typescript-eslint/explicit-module-boundary-types': ['error'],
        '@typescript-eslint/explicit-function-return-type': ['error'],
    },
    overrides: [
        {
            files: ['**/tests/unit/**/*.spec.ts'],
            env: {
                jest: true,
            },
        },
    ],
};

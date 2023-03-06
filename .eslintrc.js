module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true
    },
    settings: {
        react: {
            version: 'detect'
        },
        'import/resolver': {
            typescript: {
                alwaysTryTypes: true
            }
        }
    },
    extends: ['airbnb', 'airbnb-typescript', 'plugin:prettier/recommended'],
    plugins: ['@typescript-eslint', 'import', 'only-warn', 'prettier'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        },
        project: './tsconfig.json'
    },
    rules: {
        'prettier/prettier': ['error'],
        'import/no-unresolved': 'off',
        'no-console': [
            'error',
            {
                allow: ['warn', 'error', 'info', 'log']
            }
        ],
        'no-alert': 'off',
        'consistent-return': 'off',
        'import/no-extraneous-dependencies': 'off',
        'import/no-named-as-default': 'off',
        'import/prefer-default-export': 'off',
        '@typescript-eslint/no-use-before-define': 'off'
    }
};

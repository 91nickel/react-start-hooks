module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: ['plugin:react/recommended', 'standard'],
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 12,
        sourceType: 'module'
    },
    plugins: ['react'],
    rules: {
        semi: 'off',
        // semi: [2, 'always'],
        indent: [0, 4],
        'space-before-function-paren': 'off',
        'object-curly-spacing': 'off',
        // 'space-before-function-paren': [
        //     'error',
        //     {anonymous: 'always', named: 'always'}
        // ],
        'multiline-ternary': ['off'],
        'no-unused-vars': 'off',
        'react/display-name': 'off',
        quotes: 'off'
        // quotes: [
        //     "error",
        //     "double",
        //     {
        //         allowTemplateLiterals: true
        //     }
        // ]
    }
}

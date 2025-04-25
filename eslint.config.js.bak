import js from '@eslint/js';
import stylisticJs from '@stylistic/eslint-plugin-js'

export default [
    js.configs.recommended,
    {
        plugins: {
            '@stylistic/js': stylisticJs
        },
        rules: {
            'no-unused-vars': 'warn',
            'no-undef': 'warn',
            '@stylistic/js/indent': ['error', 2],
            '@stylistic/js/max-len': ['error', { 'code': 80 }]
        }
    }
];
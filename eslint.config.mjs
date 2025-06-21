import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'
const eslintPluginPrettierRecommended = require('eslint-plugin-prettier/recommended')

module.exports = [
    // Any other config imports go at the top
    eslintPluginPrettierRecommended,
]

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
    baseDirectory: __dirname,
})

const eslintConfig = [
    ...compat.extends(
        'next/core-web-vitals',
        'next/typescript',
        'plugin:prettier/recommended'
    ),
]

export default eslintConfig

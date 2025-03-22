import antfu from '@antfu/eslint-config'

export default antfu({
    stylistic: {
        indent: 4,
        quotes: 'single',
    },
    rules: {
        'node/prefer-global/process': 0,
    },
})

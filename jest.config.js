module.exports = {
    preset: '@vue/cli-plugin-unit-jest/presets/typescript',
    testMatch: ['**/*test.+(ts|tsx|js)'],
    globals: {
        'ts-jest': {
            diagnostics: true,
        },
    },
};

const { pathsToModuleNameMapper } = require('ts-jest/utils');
const { compilerOptions } = require('./tsconfig');

module.exports = {
    preset: '@vue/cli-plugin-unit-jest/presets/typescript',
    testMatch: ['**/*test.+(ts|tsx|js)'],
    globals: {
        'ts-jest': {
            diagnostics: true,
            isolatedModules: true,
        },
    },
    moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
        prefix: '<rootDir>/',
    }),
};

// https://docs.cypress.io/guides/guides/plugins-guide.html
const cypressTypeScriptPreprocessor = require('./cy-ts-preprocessor');

// https://github.com/palmerhq/cypress-image-snapshot#installation
const {
  addMatchImageSnapshotPlugin,
} = require('cypress-image-snapshot/plugin');

module.exports = (on, config) => {
  on('file:preprocessor', cypressTypeScriptPreprocessor);

  addMatchImageSnapshotPlugin(on, config);

  return Object.assign({}, config, {
    fixturesFolder: 'tests/e2e/fixtures',
    integrationFolder: 'tests/e2e/specs',
    screenshotsFolder: 'tests/e2e/screenshots',
    videosFolder: 'tests/e2e/videos',
    supportFile: 'tests/e2e/support/index.js',
  });
};

/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

const { startDevServer } = require('@cypress/vite-dev-server');
const path = require('path');

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
  on('dev-server:start', (options) => {
    const viteConfig = {
      // import or inline your vite configuration from vite.config.js
      resolve: {
        /**
         * FIXME: getting error:
         * Could not resolve "@/components/IntroCard.vue" (the plugin "vite:dep-scan" didn't set a resolve directory)
         * 😢
         */
        alias: [
          { find: 'vue', replacement: 'vue/dist/vue.esm-bundler.js' },
          { find: '@', replacement: path.resolve(__dirname, '../..', 'src/') },
        ],
      },
      plugins: [],
    };
    return startDevServer({ options, viteConfig });
  });
  return config;
};

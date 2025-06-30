import { defineConfig } from "cypress";

export default defineConfig({
  projectId: 'hgdyuk',
  chromeWebSecurity: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://bo-v3.hub88.io',
    testIsolation: false
  },
});

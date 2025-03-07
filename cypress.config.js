const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight: 1080, // full screen
  viewportWidth: 1920,
  video: false,
  e2e: {
    // baseUrl: "http://localhost:8080",
    excludeSpecPattern: ["**/1-getting-started", "**/2-advanced-examples"],
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx}",
    setupNodeEvents(on, config) {
      
    },
  },
});

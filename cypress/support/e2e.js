// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import "./commands";
import { HomePage } from "./pages/homePage";

// before("Initilaze pages", () => {
//   cy.homePage = new HomePage();
// });

const originalLog = Cypress.log;

Cypress.log = function (options) {
  // Block logs for API requests
  if (options.displayName === "xhr" || options.displayName === "fetch") {
    return;
  }
  return originalLog(options);
};
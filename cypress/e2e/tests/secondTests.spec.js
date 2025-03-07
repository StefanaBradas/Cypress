/// <reference types="cypress" />

import homePage from "../../support/pages/homePage";

it.only("Verify all items data", () => {
  cy.visit("https://automationteststore.com/");
  const json = homePage.verifyProductData("Skinsheen Bronzer Stick");
});

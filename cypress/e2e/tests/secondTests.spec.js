/// <reference types="cypress" />

import homePage from "../../support/pages/homePage";

it("Verifyall items data", async() => {
    cy.visit("https://automationteststore.com/")

//   console.log(homePage.returnExpectedJsonItem("Skinsheen Bronzer Stick"));
  homePage.verifyItemData("Skinsheen Bronzer Stick")
  homePage.verifyItemData("BeneFit Girl Meets Pearl")
});

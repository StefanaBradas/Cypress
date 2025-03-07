/// <reference types="cypress" />
import { user } from "../../fixtures/contactUsData.json";
import { products } from "../../fixtures/productData.json";

import homePage from "../../support/pages/homePage";

beforeEach("Naviate to Home Page", () => {
  cy.visit("https://automationteststore.com/") // STORE
  // cy.visit("https://webdriveruniversity.com/") // UNIVRSITY
  // cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html"); // UNIVRSITY

  // cy.get(`[class="active menu_home"]`).should("be.visible")
});

it("First test", () => {
  homePage.verifyProductItemDetails("Skinsheen Bronzer Stick");
});

it("Second test", () => {
  // cy.contains("#thumbnail-1 tr", "Jones").find("td").eq(2).invoke("text").then(console.log)
  cy.contains("td", "Jones").next().invoke("text").then(console.log);
  // cy.contains("#thumbnail-1 tr", "Jones").find("td").eq(2).then( locator => console.log(locator.text()))
});

it("Datepicker", () => {
  cy.get(".input-group-addon").click();
  cy.get(`[class="day"]`).contains("5", { exact: true }).click();
});

it("Datepicker", () => {
  console.log(products[0]);
});

it("Contact us test", () => {
  cy.get(`[name="first_name"]`).type(user.name)
  cy.lala()
});

it("New tab test", () => {

  cy.get(".thumbnail").contains("CONTACT US").then( () => {debugger})
  cy.get(`[name="first_name"]`).type("alalala")

});

it("Verify product data", () => {

  homePage.verifyProductItemDetails("BeneFit Girl Meets Pearl")

})
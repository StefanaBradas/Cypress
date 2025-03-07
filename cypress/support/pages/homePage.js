import { products } from "../../fixtures/productData.json";

class HomePage {
  #itemProducts = () => cy.get(".thumbnails .col-md-3");
  #itemProduct = (index) => this.#itemProducts(index).eq(index);

  #productNameLabel = (index) => this.#itemProducts(index).find(".prdocutname");

  #itemOnlyPrice = (index) => this.#itemProducts(index).find(".oneprice");
  #itemOldPrice = (index) => this.#itemProducts(index).find(".priceold");
  #itemNewPrice = (index) => this.#itemProducts(index).find(".pricenew");

  returnExpectedJsonItem(itemName) {
    return products.find((item) => item.name === itemName);
  }

   returnItemIndexes(itemName) {
    let indexArray = [];
    return this.#itemProducts().find(".prdocutname").then((items) => {
        items.each((index, item) => {
          if (Cypress.$(item).text() === itemName) {
            indexArray.push(index);
          }
        })
        return indexArray
    });
  }

  async verifyProductData() {
    const expectedObject = this.returnExpectedJsonItem("Skinsheen Bronzer Stick");

    const itemArray = await this.returnItemIndexes("Skinsheen Bronzer Stick"); // SOLUTION 1
    console.log(itemArray)

  }
}

export default new HomePage();

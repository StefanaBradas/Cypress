import { products } from "../../fixtures/productData.json";

class HomePage {
  #itemProducts = () => cy.get(".col-md-3.col-sm-6");
  #itemProduct = (index) => this.#itemProducts().eq(index);

  #itemProductNameLabel = (index) =>
    this.#itemProduct(index).find(".prdocutname");

  #itemPrice = (index) => this.#itemProduct(index).find(".price");
  #itemOnePrice = (index) => this.#itemProduct(index).find(".oneprice");
  #itemOldPrice = (index) => this.#itemProduct(index).find(".priceold");
  #itemNewPrice = (index) => this.#itemProduct(index).find(".pricenew");

  #saleSign = (index) => this.#itemProduct(index).find(".sale")

  #returnExpectedJsonItem(itemName) {
    return products.find((item) => item.name === itemName);
  }

  #returnItemIndexArray(itemName) {
    let indexArray = [];
     return this.#itemProducts().find(".prdocutname").then((items) => {
        items.each((index, item) => {
          if (Cypress.$(item).text() === itemName) {
            indexArray.push(index);
          }
        });
        return indexArray
      });
  }

  verifyItemData (itemName) {                                                           // OPTION 1
    const expectedJsonItem =  this.#returnExpectedJsonItem(itemName)
    this.#returnItemIndexArray(itemName).then( indexArray => {
      indexArray.forEach((i) => {
        this.#itemProductNameLabel(i).should("have.text", expectedJsonItem.name)
        this.#itemPrice(i).then($price => {
            if ($price.find(".oneprice").length > 0) {
                this.#itemOnePrice(i).should("have.text", `$${expectedJsonItem.price.new}0`);
            } else {
                this.#itemOldPrice(i).should("have.text", `$${expectedJsonItem.price.old}0`);
                this.#itemNewPrice(i).should("have.text", `$${expectedJsonItem.price.new}0`);
                this.#saleSign(i).should("exist");
            }
        });
    })
    })
  }

  async verifyItemData (itemName) {                                                      // OPTION 2
    const expectedJsonItem =  this.#returnExpectedJsonItem(itemName)
    const indexArray = await this.#returnItemIndexArray(itemName)

    indexArray.forEach((i) => {
        this.#itemProductNameLabel(i).should("have.text", expectedJsonItem.name)
        this.#itemPrice(i).then($price => {
            if ($price.find(".oneprice").length > 0) {
                this.#itemOnePrice(i).should("have.text", `$${expectedJsonItem.price.new}0`);
            } else {
                this.#itemOldPrice(i).should("have.text", `$${expectedJsonItem.price.old}0`);
                this.#itemNewPrice(i).should("have.text", `$${expectedJsonItem.price.new}0`);
                this.#saleSign(i).should("exist");
            }
        });
    })
  }

}

export default new HomePage();

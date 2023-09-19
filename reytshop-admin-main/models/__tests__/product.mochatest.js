import chai from "chai";
const expect = chai.expect;

const Product = require("../models/Product");

describe("Product Model", () => {
  it("should have a name property", () => {
    const product = new Product({ name: "Test Product" });
    expect(product.name).to.equal("Test Product");
  });

  it("should be able to save to the database", async () => {
    const product = new Product({ name: "Test Product" });
    const savedProduct = await product.save();
    expect(savedProduct).to.have.property("_id");
  });
});

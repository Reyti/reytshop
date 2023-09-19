import chai from "chai";
const expect = chai.expect;

import { Category } from "../Category.js";

describe("Category Model", () => {
  it("should have a name property", async () => {
    const category = new Category({ name: "Test Category" });
    expect(category.name).to.equal("Test Category");
  });

  it("should be able to save to the database", async () => {
    const category = new Category({ name: "Test Category" });
    const savedCategory = await category.save();
    expect(savedCategory).to.have.property("_id");
  });
});

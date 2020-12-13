var assert = require("assert");
import todo from "../dist/collections";

describe("Package", function () {
  it("works", ()=>{
    assert.equal(todo(), 42);
  });
});

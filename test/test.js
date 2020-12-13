var assert = require("assert");
import {ArrayList, Float32List} from "../dist/collections";

describe("ArrayList", function () {
  it("works", ()=>{
    assert.ok(new ArrayList());
  });
});

describe("Float32List", function () {
  it("works", ()=>{
    assert.ok(new Float32List());
  });
});

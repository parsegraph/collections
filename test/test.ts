import { assert } from "chai";
import { ArrayList, Float32List } from "../src/index";

describe("ArrayList", function () {
  it("works", () => {
    assert.ok(new ArrayList());
  });

  it("can add", () => {
    const al: ArrayList<string> = new ArrayList();
    assert.equal(al.length(), 0);
    al.push("1");
    assert.equal(al.length(), 1);
  });
});

describe("Float32List", function () {
  it("works", () => {
    assert.ok(new Float32List());
  });
});

const assert = require("assert");
const hexToRgba = require("../index");

describe("3-digit hex with alpha value and hash character", () => {
  it("should calculate correct rgb values", () => {
    assert.equal("rgba(255, 255, 255, 0.3)", hexToRgba("#FFF", "0.3"));
  });
});

describe("3-digit hex with hash character and integer alpha value", () => {
  it("should calculate correct rgb values", () => {
    assert.equal("rgba(255, 255, 255, 1)", hexToRgba("#FFF", 1));
  });
});

describe("6-digit hex values without alpha value and hash character", () => {
  it("should calculate correct rgb values", () => {
    assert.equal("rgba(255, 255, 255, 1)", hexToRgba("#FFFFFF"));
  });
});

describe("5-digit hex values without alpha value and hash character", () => {
  it("should calculate rgba values from hex and string alpha value", () => {
    assert.equal("rgba(18, 52, 5, 0.3)", hexToRgba("#12345", "0.3"));
  });
});

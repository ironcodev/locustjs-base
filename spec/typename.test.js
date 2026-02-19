import * as locust from "../src";

// -------------- typename -----------------
describe("@locustjs/base test suite: testing typename", function () {
  it(`typename(null)`, function () {
    expect(locust.typename(null)).toBe("null");
  });

  it(`typename(undefined)`, function () {
    expect(locust.typename(undefined)).toBe("undefined");
  });

  it(`typename(23)`, function () {
    expect(locust.typename(23)).toBe("number");
  });

  it(`typename(Number(23))`, function () {
    expect(locust.typename(Number(23))).toBe("number");
  });

  it(`typename(new Number(23))`, function () {
    expect(locust.typename(new Number(23))).toBe("number");
  });

  it(`typename(Number.NEGATIVE_INFINITY)`, function () {
    expect(locust.typename(Number.NEGATIVE_INFINITY)).toBe("number");
  });

  it(`typename('')`, function () {
    expect(locust.typename("")).toBe("string");
  });

  it(`typename(String(''))`, function () {
    expect(locust.typename(String(""))).toBe("string");
  });

  it(`typename(new String(''))`, function () {
    expect(locust.typename(new String(''))).toBe("string");
  });

  it(`typename(true)`, function () {
    expect(locust.typename(true)).toBe("boolean");
  });

  it(`typename(Boolean(true))`, function () {
    expect(locust.typename(Boolean(true))).toBe("boolean");
  });

  it(`typename(new Boolean(false))`, function () {
    expect(locust.typename(new Boolean(false))).toBe("boolean");
  });

  it(`typename([])`, function () {
    expect(locust.typename([])).toBe("array");
  });

  it(`typename([10,20])`, function () {
    expect(locust.typename([10,20])).toBe("array");
  });

  it(`typename(new Array(3))`, function () {
    expect(locust.typename(new Array(3))).toBe("array");
  });

  it(`typename(new Date())`, function () {
    expect(locust.typename(new Date())).toBe("date");
  });

  it(`typename({})`, function () {
    expect(locust.typename({})).toBe("object");
  });

  it(`typename(function(){})`, function () {
    expect(locust.typename(function(){})).toBe("function");
  });

  it(`typename(new Function('a','return a * 2'))`, function () {
    expect(locust.typename(new Function('a','return a * 2'))).toBe("function");
  });

  it(`typename(Function('a','return a * 2'))`, function () {
    expect(locust.typename(Function('a','return a * 2'))).toBe("function");
  });

  it(`typename(NaN)`, function () {
    expect(locust.typename(NaN)).toBe("NaN");
  });
});

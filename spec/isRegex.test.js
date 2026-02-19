import * as locust from "../src";

// -------------- isRegex -----------------
describe("@locustjs/base test suite: testing isRegex", function () {
  it(`isRegex(null)`, function () {
    expect(locust.isRegex(null)).toBe(false);
  });

  it(`isRegex(undefined)`, function () {
    expect(locust.isRegex(undefined)).toBe(false);
  });

  it(`isRegex(23)`, function () {
    expect(locust.isRegex(23)).toBe(false);
  });

  it(`isRegex('')`, function () {
    expect(locust.isRegex("")).toBe(false);
  });

  it(`isRegex(NaN)`, function () {
    expect(locust.isRegex(NaN)).toBe(false);
  });

  it(`isRegex(/\d+/)`, function () {
    expect(locust.isRegex(/\d+/)).toBe(true);
  });

  it(`isRegex(new RegExp('\d+'))`, function () {
    expect(locust.isRegex(new RegExp("d+"))).toBe(true);
  });
});

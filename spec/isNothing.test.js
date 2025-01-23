import * as locust from "../src";

// -------------- isNothing -----------------
describe("locustjs-base test suite: testing isNothing", function () {
  it(`isNothing(null)`, function () {
    expect(locust.isNothing(null)).toBe(true);
  });

  it(`isNothing(undefined)`, function () {
    expect(locust.isNothing(undefined)).toBe(true);
  });

  it(`isNothing(23)`, function () {
    expect(locust.isNothing(23)).toBe(false);
  });

  it(`isNothing('')`, function () {
    expect(locust.isNothing("")).toBe(true);
  });

  it(`isNothing(NaN)`, function () {
    expect(locust.isNothing(NaN)).toBe(true);
  });

  it(`isNothing({})`, function () {
    expect(locust.isNothing({})).toBe(true);
  });

  it(`isNothing({a: 1})`, function () {
    expect(locust.isNothing({ a: 1 })).toBe(false);
  });
});

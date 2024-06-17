import * as locust from "../index.esm.js";

// -------------- queryObject -----------------
describe("locustjs-base test suite: testing queryObject", function () {
  it(`queryObject(null)`, function () {
    expect(locust.queryObject(null)).toBe(undefined);
  });

  it(`queryObject(undefined)`, function () {
    expect(locust.queryObject(undefined)).toBe(undefined);
  });

  it(`queryObject(23)`, function () {
    expect(locust.queryObject(23)).toBe(undefined);
  });

  it(`queryObject('')`, function () {
    expect(locust.queryObject("")).toBe(undefined);
  });

  it(`queryObject({}, 'a')`, function () {
    expect(locust.queryObject({}, "a")).toBe(undefined);
  });

  it(`queryObject({ a: 10 }, 'a')`, function () {
    expect(locust.queryObject({ a: 10 }, "a")).toBe(10);
  });

  it(`queryObject({ a: 10 }, 'a.b')`, function () {
    expect(locust.queryObject({ a: 10 }, "a.b")).toBe(undefined);
  });

  it(`queryObject({ a: 10, b: { name: 'ali' } }, 'b.name')`, function () {
    expect(locust.queryObject({ a: 10, b: { name: "ali" } }, "b.name")).toBe(
      "ali"
    );
  });

  it(`queryObject({ a: [10, 20] }, 'a[1]')`, function () {
    expect(locust.queryObject({ a: [10, 20] }, "a[1]")).toBe(20);
  });

  it(`queryObject({ a: [10, { b: [ { c: 'test' } ] }] }, 'a[1].b[0].c')`, function () {
    expect(
      locust.queryObject({ a: [10, { b: [{ c: "test" }] }] }, "a[1].b[0].c")
    ).toBe("test");
  });
});

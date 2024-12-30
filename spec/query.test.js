import * as locust from "../src";

// -------------- query -----------------
describe("locustjs-base test suite: testing query", function () {
  it(`query(null)`, function () {
    expect(locust.query(null)).toBe(undefined);
  });

  it(`query(undefined)`, function () {
    expect(locust.query(undefined)).toBe(undefined);
  });

  it(`query(23)`, function () {
    expect(locust.query(23)).toBe(undefined);
  });

  it(`query(23, 'a')`, function () {
    expect(locust.query(23, 'a')).toBe(undefined);
  });

  it(`query(23, '[0])`, function () {
    expect(locust.query(23, '[0]')).toBe(undefined);
  });

  it(`query('')`, function () {
    expect(locust.query("")).toBe(undefined);
  });

  it(`query('abc')`, function () {
    expect(locust.query('abc')).toBe(undefined);
  });

  it(`query('abc', 'a')`, function () {
    expect(locust.query('abc', 'a')).toBe(undefined);
  });

  it(`query('abc', '[0]')`, function () {
    expect(locust.query('abc', '[0]')).toBe(undefined);
  });

  it(`query({}, 'a')`, function () {
    expect(locust.query({}, "a")).toBe(undefined);
  });

  it(`query({ a: 10 }, 'a')`, function () {
    expect(locust.query({ a: 10 }, "a")).toBe(10);
  });

  it(`query({ a: 10 }, 'a.b')`, function () {
    expect(locust.query({ a: 10 }, "a.b")).toBe(undefined);
  });

  it(`query({ a: 10, b: { name: 'ali' } }, 'b.name')`, function () {
    expect(locust.query({ a: 10, b: { name: "ali" } }, "b.name")).toBe("ali");
  });

  it(`query({ a: [10, 20] }, 'a[1]')`, function () {
    expect(locust.query({ a: [10, 20] }, "a[1]")).toBe(20);
  });

  it(`query({ a: [10, { b: [ { c: 'test' } ] }] }, 'a[1].b[0].c')`, function () {
    expect(
      locust.query({ a: [10, { b: [{ c: "test" }] }] }, "a[1].b[0].c")
    ).toBe("test");
  });

  it(`query([])`, function () {
    expect(locust.query([])).toBe(undefined);
  });

  it(`query([], '[0]')`, function () {
    expect(locust.query([], "[0]")).toBe(undefined);
  });

  it(`query([10], '[0]')`, function () {
    expect(locust.query([10], "[0]")).toBe(10);
  });

  it(`query([{ a: 10 }], '[0].a')`, function () {
    expect(locust.query([{ a: 10 }], "[0].a")).toBe(10);
  });

  it(`query([10], '[1]')`, function () {
    expect(locust.query([10], "[1]")).toBe(undefined);
  });
});

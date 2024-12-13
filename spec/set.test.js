import * as locust from "../index.esm.js";

// -------------- set -----------------
describe("locustjs-base test suite: testing set", function () {
  it(`set(null)`, function () {
    expect(locust.set(null)).toBe(null);
  });

  it(`set(undefined)`, function () {
    expect(locust.set(undefined)).toBe(undefined);
  });

  it(`set(23)`, function () {
    expect(locust.set(23)).toBe(23);
  });

  it(`set(23, 'a')`, function () {
    expect(locust.set(23, "a")).toBe(23);
  });

  it(`set(23, 'a', 10)`, function () {
    expect(locust.set(23, "a", 10)).toBe(23);
  });

  it(`set({}, 'a')`, function () {
    const x = {};

    locust.set(x, "a");

    expect(x.a).toBe(undefined);
  });

  it(`set({}, 'a', 10)`, function () {
    const x = {};

    locust.set(x, "a", 10);

    expect(x.a).toBe(10);
  });

  it(`set({}, 'a.b')`, function () {
    const x = {};

    locust.set(x, "a.b");

    expect(typeof x.a).toBe("object");
    expect(x.a.b).toBe(undefined);
  });

  it(`set({}, 'a.b', 10)`, function () {
    const x = {};

    locust.set(x, "a.b", 10);

    expect(typeof x.a).toBe("object");
    expect(x.a.b).toBe(10);
  });

  it(`set({a: 5}, 'a.b')`, function () {
    const x = { a: 5 };

    locust.set(x, "a.b");

    expect(typeof x.a).toBe("object");
    expect(x.a.b).toBe(undefined);
  });

  it(`set({a: 5}, 'a.b', 10)`, function () {
    const x = { a: 5 };

    locust.set(x, "a.b", 10);

    expect(typeof x.a).toBe("object");
    expect(x.a.b).toBe(10);
  });

  it(`set({a: 5}, 'x.y')`, function () {
    const obj = { a: 5 };

    locust.set(obj, "x.y");

    expect(obj.a).toBe(5);
    expect(typeof obj.x).toBe("object");
    expect(obj.x.y).toBe(undefined);
  });

  it(`set({a: 5}, 'x.y', 10)`, function () {
    const obj = { a: 5 };

    locust.set(obj, "x.y", 10);

    expect(obj.a).toBe(5);
    expect(typeof obj.x).toBe("object");
    expect(obj.x.y).toBe(10);
  });
});

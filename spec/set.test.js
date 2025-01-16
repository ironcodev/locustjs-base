import * as locust from "../src";

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

  it(`set({a: 5}, 'a.b', 10)`, function () {
    const obj = { a: 5 };

    locust.set(obj, "a.b", 10);

    expect(obj.a).toBeDefined();
    expect(obj.a.b).toBeDefined();
    expect(typeof obj.a).toBe("object");
    expect(obj.a.b).toBe(10);
  });

  it(`set({a: 5}, 'a[1]', 10)`, function () {
    const obj = { a: 5 };

    locust.set(obj, "a[1]", 10);

    expect(obj.a).toBeDefined();
    expect(locust.isArray(obj.a)).toBeTrue();
    expect(obj.a.length).toBe(2);
    expect(obj.a[1]).toBe(10);
  });

  it(`set({a: [10,20]}, 'a.name', 'ali')`, function () {
    const obj = { a: [10, 20] };

    locust.set(obj, "a.name", "ali");

    expect(obj.a).toBeDefined();
    expect(locust.isObject(obj.a)).toBeTrue();
    expect(obj.a.name).toBeDefined();
    expect(obj.a.name).toBe("ali");
  });

  it(`set({a: [10,20]}, 'a.name[1].fn[2]', 'ali')`, function () {
    const obj = { a: [10, 20] };

    locust.set(obj, "a.name[1].fn[2]", "ali");

    expect(obj.a).toBeDefined();
    expect(locust.isObject(obj.a)).toBeTrue();
    expect(locust.isArray(obj.a.name)).toBeTrue();
    expect(obj.a.name.length).toBe(2);
    expect(locust.isObject(obj.a.name[1])).toBeTrue();
    expect(obj.a.name[1].fn).toBeDefined();
    expect(locust.isArray(obj.a.name[1].fn)).toBeTrue();
    expect(obj.a.name[1].fn.length).toBe(3);
    expect(obj.a.name[1].fn[2]).toBe("ali");
  });

  it(`set([], '[1]', 10)`, function () {
    const obj = [];

    locust.set(obj, "[1]", 10);

    expect(obj.length).toBe(2);
    expect(obj[1]).toBe(10);
  });

  it(`set([], '[1][2]', 10)`, function () {
    const obj = [];

    locust.set(obj, "[1][2]", 10);

    expect(obj.length).toBe(2);
    expect(obj[1].length).toBe(3);
    expect(obj[1][2]).toBe(10);
  });

  it(`set({}, 'a[2]', 'ali')`, function () {
    const obj = {};

    locust.set(obj, "a[2]", "ali");

    expect(obj.a).toBeDefined();
    expect(locust.isArray(obj.a)).toBeTrue();
    expect(obj.a.length).toBe(3);
    expect(obj.a[2]).toBe("ali");
  });

  it(`set({}, 'a[2][1]', 'ali')`, function () {
    const obj = {};

    locust.set(obj, "a[2][1]", "ali");

    expect(obj.a).toBeDefined();
    expect(locust.isArray(obj.a)).toBeTrue();
    expect(locust.isArray(obj.a[2])).toBeTrue();
    expect(obj.a.length).toBe(3);
    expect(obj.a[2].length).toBe(2);
    expect(obj.a[2][1]).toBe("ali");
  });
});

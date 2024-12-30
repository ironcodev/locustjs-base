import * as locust from "../src";

// -------------- isEmpty -----------------
describe("@locustjs/base test suite: testing equals()", function () {
  it(`should return true for equals(null, null)`, function () {
    expect(locust.equals(null, null)).toBe(true);
  });

  it(`should return true for equals(null, undefined)`, function () {
    expect(locust.equals(null, undefined)).toBe(true);
  });

  it(`should return false for equals(null, undefined, true)`, function () {
    expect(locust.equals(null, undefined, true)).toBe(false);
  });

  it(`should return true for equals(1, '1')`, function () {
    expect(locust.equals(1, "1")).toBe(true);
  });

  it(`should return false for equals(1, '1', true)`, function () {
    expect(locust.equals(1, "1", true)).toBe(false);
  });

  it(`should return false for equals({}, null)`, function () {
    expect(locust.equals({}, null)).toBe(false);
  });

  it(`should return true for equals({}, {})`, function () {
    expect(locust.equals({}, {})).toBe(true);
  });

  it(`should return true for equals({a: 10, b: 'ali'}, {a: 10, b: 'ali'})`, function () {
    expect(locust.equals({ a: 10, b: "ali" }, { a: 10, b: "ali" })).toBe(true);
  });

  it(`should return true for equals({a: 10, b: [10, 20, 30]}, {a: 10, b: [10,20,30]})`, function () {
    expect(
      locust.equals({ a: 10, b: [10, 20, 30] }, { a: 10, b: [10, 20, 30] })
    ).toBe(true);
  });

  it(`should return true for equals({a: 10, b: [{x: 5, y: 10.5}, {x:-1.5, y:2.45, o: true}]}, {a: 10, b: [{x: '5', y: '10.5'}, {x:'-1.5', y:'2.45', o: true}]})`, function () {
    expect(
      locust.equals(
        {
          a: 10,
          b: [
            { x: 5, y: 10.5 },
            { x: -1.5, y: 2.45, o: true },
          ],
        },
        {
          a: 10,
          b: [
            { x: "5", y: "10.5" },
            { x: "-1.5", y: "2.45", o: true },
          ],
        }
      )
    ).toBe(true);
  });

  it(`should return false for equals({a: 10, b: [{x: 5, y: 10.5}, {x:-1.5, y:2.45, o: true}]}, {a: 10, b: [{x: '5', y: '10.5'}, {x:'-1.5', y:'2.45', o: true}]})`, function () {
    expect(
      locust.equals(
        {
          a: 10,
          b: [
            { x: 5, y: 10.5 },
            { x: -1.5, y: 2.45, o: true },
          ],
        },
        {
          a: 10,
          b: [
            { x: "5", y: "10.5" },
            { x: "-1.5", y: "2.45", o: true },
          ],
        },
        true
      )
    ).toBe(false);
  });

  it(`should return true for equals({a: 10, b: 'ali'}, {a: '10', b: 'ali'})`, function () {
    expect(locust.equals({ a: 10, b: "ali" }, { a: "10", b: "ali" })).toBe(
      true
    );
  });

  it(`should return false for equals({a: 10, b: 'ali'}, {a: '10', b: 'ali'})`, function () {
    expect(
      locust.equals({ a: 10, b: "ali" }, { a: "10", b: "ali" }, true)
    ).toBe(false);
  });

  it(`should return false for equals({a: 10, b: 'ali'}, {a: 10, b: 'Ali'})`, function () {
    expect(locust.equals({ a: 10, b: "ali" }, { a: 10, b: "Ali" })).toBe(false);
  });
});

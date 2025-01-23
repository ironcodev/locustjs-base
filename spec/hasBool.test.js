import * as locust from "../src";

// -------------- hasBool -----------------
describe("locustjs-base test suite: testing hasBool", function () {
  it(`hasBool(null)`, function () {
    expect(locust.hasBool(null)).toBe(false);
  });

  it(`hasBool(undefined)`, function () {
    expect(locust.hasBool(undefined)).toBe(false);
  });

  it(`hasBool(23)`, function () {
    expect(locust.hasBool(23)).toBe(false);
  });

  it(`hasBool('')`, function () {
    expect(locust.hasBool("")).toBe(false);
  });

  it(`hasBool(NaN)`, function () {
    expect(locust.hasBool(NaN)).toBe(false);
  });

  it(`hasBool(true)`, function () {
    expect(locust.hasBool(true)).toBe(true);
  });

  it(`hasBool(false)`, function () {
    expect(locust.hasBool(false)).toBe(true);
  });

  it(`hasBool('true')`, function () {
    expect(locust.hasBool("true")).toBe(true);
  });

  it(`hasBool('false')`, function () {
    expect(locust.hasBool("false")).toBe(true);
  });

  it(`hasBool('  true ')`, function () {
    expect(locust.hasBool("  true ")).toBe(true);
  });

  it(`hasBool('  false ')`, function () {
    expect(locust.hasBool("  false ")).toBe(true);
  });

  it(`hasBool('True')`, function () {
    expect(locust.hasBool("True")).toBe(true);
  });

  it(`hasBool('False')`, function () {
    expect(locust.hasBool("False")).toBe(true);
  });

  it(`hasBool('  True ')`, function () {
    expect(locust.hasBool("  True ")).toBe(true);
  });

  it(`hasBool('  False ')`, function () {
    expect(locust.hasBool("  False ")).toBe(true);
  });

  it(`hasBool('tRue')`, function () {
    expect(locust.hasBool("tRue")).toBe(false);
  });

  it(`hasBool('FAlse')`, function () {
    expect(locust.hasBool("FAlse")).toBe(false);
  });

  it(`hasBool('TRUE')`, function () {
    expect(locust.hasBool("TRUE")).toBe(true);
  });

  it(`hasBool('FALSE')`, function () {
    expect(locust.hasBool("FALSE")).toBe(true);
  });

  it(`hasBool('  TRUE ')`, function () {
    expect(locust.hasBool("  TRUE ")).toBe(true);
  });

  it(`hasBool('  FALSE ')`, function () {
    expect(locust.hasBool("  FALSE ")).toBe(true);
  });

  it(`hasBool('True', { pascal: false })`, function () {
    expect(locust.hasBool("True", { pascal: false })).toBe(false);
  });

  it(`hasBool('False', { pascal: false })`, function () {
    expect(locust.hasBool("False", { pascal: false })).toBe(false);
  });

  it(`hasBool('  True ', { pascal: false })`, function () {
    expect(locust.hasBool("  True ", { pascal: false })).toBe(false);
  });

  it(`hasBool('  False ', { pascal: false })`, function () {
    expect(locust.hasBool("  False ", { pascal: false })).toBe(false);
  });

  it(`hasBool('True', 'p')`, function () {
    expect(locust.hasBool("True", "p")).toBe(true);
  });

  it(`hasBool('False', 'p')`, function () {
    expect(locust.hasBool("False", "p")).toBe(true);
  });

  it(`hasBool('  True ', 'pt')`, function () {
    expect(locust.hasBool("  True ", "pt")).toBe(true);
  });

  it(`hasBool('  False ', 'pt')`, function () {
    expect(locust.hasBool("  False ", "pt")).toBe(true);
  });

  it(`hasBool('TRUE', { pascal: false })`, function () {
    expect(locust.hasBool("TRUE", { upper: false })).toBe(false);
  });

  it(`hasBool('FALSE', { upper: false })`, function () {
    expect(locust.hasBool("FALSE", { upper: false })).toBe(false);
  });

  it(`hasBool('  TRUE ', { upper: false })`, function () {
    expect(locust.hasBool("  TRUE ", { upper: false })).toBe(false);
  });

  it(`hasBool('  FALSE ', { upper: false })`, function () {
    expect(locust.hasBool("  FALSE ", { upper: false })).toBe(false);
  });

  it(`hasBool('true', 'u')`, function () {
    expect(locust.hasBool("true", "u")).toBe(true);
  });
  it(`hasBool('false', 'u')`, function () {
    expect(locust.hasBool("false", "u")).toBe(true);
  });
  it(`hasBool('True', 'u')`, function () {
    expect(locust.hasBool("True", "u")).toBe(false);
  });
  it(`hasBool('False', 'u')`, function () {
    expect(locust.hasBool("False", "u")).toBe(false);
  });
  it(`hasBool('TRUE', 'u')`, function () {
    expect(locust.hasBool("TRUE", "u")).toBe(true);
  });

  it(`hasBool('FALSE', 'u')`, function () {
    expect(locust.hasBool("FALSE", "u")).toBe(true);
  });

  it(`hasBool('  TRUE ', 'ut')`, function () {
    expect(locust.hasBool("  TRUE ", "ut")).toBe(true);
  });

  it(`hasBool('  FALSE ', 'ut')`, function () {
    expect(locust.hasBool("  FALSE ", "ut")).toBe(true);
  });
});

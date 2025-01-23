import * as locust from '../src'

// -------------- isNull -----------------
describe('locustjs-base test suite: testing isNull', function() {
  it(`isNull(null)`, function() {
     expect(locust.isNull(null)).toBe(true);
  });
  
  it(`isNull(undefined)`, function() {
     expect(locust.isNull(undefined)).toBe(false);
  });
  
  it(`isNull(23)`, function() {
     expect(locust.isNull(23)).toBe(false);
  });
  
  it(`isNull('')`, function() {
     expect(locust.isNull('')).toBe(false);
  });
  
  it(`isNull(NaN)`, function() {
     expect(locust.isNull(NaN)).toBe(false);
  });
});

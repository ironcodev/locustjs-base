import * as locust from '../src'

// -------------- isNullOrUndefined -----------------
describe('locustjs-base test suite: testing isNullOrUndefined', function() {
  it(`isNullOrUndefined(null)`, function() {
     expect(locust.isNullOrUndefined(null)).toBe(true);
  });
  
  it(`isNullOrUndefined(undefined)`, function() {
     expect(locust.isNullOrUndefined(undefined)).toBe(true);
  });
  
  it(`isNullOrUndefined(23)`, function() {
     expect(locust.isNullOrUndefined(23)).toBe(false);
  });
  
  it(`isNullOrUndefined('')`, function() {
     expect(locust.isNullOrUndefined('')).toBe(false);
  });
  
  it(`isNullOrUndefined(NaN)`, function() {
     expect(locust.isNullOrUndefined(NaN)).toBe(false);
  });
});

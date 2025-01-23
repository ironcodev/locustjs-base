import * as locust from '../src'

// -------------- isUndefined -----------------
describe('locustjs-base test suite: testing isUndefined', function() {
  it(`isUndefined(null)`, function() {
     expect(locust.isUndefined(null)).toBe(false);
  });
  
  it(`isUndefined(undefined)`, function() {
     expect(locust.isUndefined(undefined)).toBe(true);
  });
  
  it(`isUndefined(23)`, function() {
     expect(locust.isUndefined(23)).toBe(false);
  });
  
  it(`isUndefined('')`, function() {
     expect(locust.isUndefined('')).toBe(false);
  });
  
  it(`isUndefined(NaN)`, function() {
     expect(locust.isUndefined(NaN)).toBe(false);
  });
});

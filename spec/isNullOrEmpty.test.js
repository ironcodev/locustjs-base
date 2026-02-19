import * as locust from '../src'

// -------------- isNullOrEmpty -----------------
describe('@locustjs/base test suite: testing isNullOrEmpty', function() {
  it(`isNullOrEmpty(null)`, function() {
     expect(locust.isNullOrEmpty(null)).toBe(true);
  });
  
  it(`isNullOrEmpty(undefined)`, function() {
     expect(locust.isNullOrEmpty(undefined)).toBe(true);
  });
  
  it(`isNullOrEmpty(23)`, function() {
     expect(locust.isNullOrEmpty(23)).toBe(false);
  });
  
  it(`isNullOrEmpty('')`, function() {
     expect(locust.isNullOrEmpty('')).toBe(true);
  });
  
  it(`isNullOrEmpty(NaN)`, function() {
     expect(locust.isNullOrEmpty(NaN)).toBe(true);
  });
});

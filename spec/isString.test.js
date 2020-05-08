import * as locust from '../index.esm.js'

// -------------- isString -----------------
describe('locustjs-base test suite: testing isString', function() {
  it(`isString(null)`, function() {
     expect(locust.isString(null)).toBe(false);
  });
  
  it(`isString(undefined)`, function() {
     expect(locust.isString(undefined)).toBe(false);
  });
  
  it(`isString(23)`, function() {
     expect(locust.isString(23)).toBe(false);
  });
  
  it(`isString('')`, function() {
     expect(locust.isString('')).toBe(true);
  });
  
  it(`isString('23')`, function() {
     expect(locust.isString('23')).toBe(true);
  });
  
  it(`isString(new String(''))`, function() {
     expect(locust.isString(new String(''))).toBe(true);
  });
  
  it(`isString(new String('23'))`, function() {
     expect(locust.isString(new String('23'))).toBe(true);
  });
});

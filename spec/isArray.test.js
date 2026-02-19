import * as locust from '../src'

// -------------- isArray -----------------
describe('@locustjs/base test suite: testing isArray', function() {
  it(`isArray(null)`, function() {
     expect(locust.isArray(null)).toBe(false);
  });
  
  it(`isArray(undefined)`, function() {
     expect(locust.isArray(undefined)).toBe(false);
  });
  
  it(`isArray(23)`, function() {
     expect(locust.isArray(23)).toBe(false);
  });
  
  it(`isArray('')`, function() {
     expect(locust.isArray('')).toBe(false);
  });
  
  it(`isArray('23')`, function() {
     expect(locust.isArray('23')).toBe(false);
  });
  
  it(`isArray(new String(''))`, function() {
     expect(locust.isArray(new String(''))).toBe(false);
  });
  
  it(`isArray(new String('23'))`, function() {
     expect(locust.isArray(new String('23'))).toBe(false);
  });
  
  it(`isArray({})`, function() {
     expect(locust.isArray({})).toBe(false);
  });
  
  it(`isArray({ a: 10 })`, function() {
     expect(locust.isArray({ a: 10 })).toBe(false);
  });
  
  it(`isArray(new Object())`, function() {
     expect(locust.isArray(new Object())).toBe(false);
  });
  
  it(`isArray([])`, function() {
     expect(locust.isArray([])).toBe(true);
  });
  
  it(`isArray([ 10, 20 ])`, function() {
     expect(locust.isArray([ 10, 20 ])).toBe(true);
  });
  
  it(`isArray(new Array())`, function() {
     expect(locust.isArray(new Array())).toBe(true);
  });
  
  it(`isArray(new Array(10, 20))`, function() {
     expect(locust.isArray(new Array(10, 20))).toBe(true);
  });
});

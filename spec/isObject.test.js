import * as locust from '../index.esm.js'

// -------------- isObject -----------------
describe('locustjs-base test suite: testing isObject', function() {
  it(`isObject(null)`, function() {
     expect(locust.isObject(null)).toBe(false);
  });
  
  it(`isObject(undefined)`, function() {
     expect(locust.isObject(undefined)).toBe(false);
  });
  
  it(`isObject(23)`, function() {
     expect(locust.isObject(23)).toBe(false);
  });
  
  it(`isObject('')`, function() {
     expect(locust.isObject('')).toBe(false);
  });
  
  it(`isObject('23')`, function() {
     expect(locust.isObject('23')).toBe(false);
  });
  
  it(`isObject(new String(''))`, function() {
     expect(locust.isObject(new String(''))).toBe(false);
  });
  
  it(`isObject(new String('23'))`, function() {
     expect(locust.isObject(new String('23'))).toBe(false);
  });
  
  it(`isObject({})`, function() {
     expect(locust.isObject({})).toBe(true);
  });
  
  it(`isObject({ a: 10 })`, function() {
     expect(locust.isObject({ a: 10 })).toBe(true);
  });
  
  it(`isObject(new Object())`, function() {
     expect(locust.isObject(new Object())).toBe(true);
  });
  
  it(`isObject([])`, function() {
     expect(locust.isObject([])).toBe(true);
  });
  
  it(`isObject([10, 20])`, function() {
     expect(locust.isObject([10, 20])).toBe(true);
  });
});


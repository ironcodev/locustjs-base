import * as locust from '../index.js'

// -------------- isSomeArray -----------------
describe('locustjs-base test suite: testing isSomeArray', function() {
  it(`isSomeArray(null)`, function() {
     expect(locust.isSomeArray(null)).toBe(false);
  });
  
  it(`isSomeArray(undefined)`, function() {
     expect(locust.isSomeArray(undefined)).toBe(false);
  });
  
  it(`isSomeArray(23)`, function() {
     expect(locust.isSomeArray(23)).toBe(false);
  });
  
  it(`isSomeArray('')`, function() {
     expect(locust.isSomeArray('')).toBe(false);
  });
  
  it(`isSomeArray('23')`, function() {
     expect(locust.isSomeArray('23')).toBe(false);
  });
  
  it(`isSomeArray(new String(''))`, function() {
     expect(locust.isSomeArray(new String(''))).toBe(false);
  });
  
  it(`isSomeArray(new String('23'))`, function() {
     expect(locust.isSomeArray(new String('23'))).toBe(false);
  });
  
  it(`isSomeArray({})`, function() {
     expect(locust.isSomeArray({})).toBe(false);
  });
  
  it(`isSomeArray({ a: 10 })`, function() {
     expect(locust.isSomeArray({ a: 10 })).toBe(false);
  });
  
  it(`isSomeArray(new Object())`, function() {
     expect(locust.isSomeArray(new Object())).toBe(false);
  });
  
  it(`isSomeArray([])`, function() {
     expect(locust.isSomeArray([])).toBe(false);
  });
  
  it(`isSomeArray([ 10, 20 ])`, function() {
     expect(locust.isSomeArray([ 10, 20 ])).toBe(true);
  });
  
  it(`isSomeArray(new Array())`, function() {
     expect(locust.isSomeArray(new Array())).toBe(false);
  });
  
  it(`isSomeArray(new Array(10, 20))`, function() {
     expect(locust.isSomeArray(new Array(10, 20))).toBe(true);
  });
});

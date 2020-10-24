import * as locust from '../index.esm.js'

// -------------- isSomeObject -----------------
describe('locustjs-base test suite: testing isSomeObject', function() {
  it(`isSomeObject(null)`, function() {
     expect(locust.isSomeObject(null)).toBe(false);
  });
  
  it(`isSomeObject(undefined)`, function() {
     expect(locust.isSomeObject(undefined)).toBe(false);
  });
  
  it(`isSomeObject(23)`, function() {
     expect(locust.isSomeObject(23)).toBe(false);
  });
  
  it(`isSomeObject('')`, function() {
     expect(locust.isSomeObject('')).toBe(false);
  });
  
  it(`isSomeObject('23')`, function() {
     expect(locust.isSomeObject('23')).toBe(false);
  });
  
  it(`isSomeObject(new String(''))`, function() {
     expect(locust.isSomeObject(new String(''))).toBe(false);
  });
  
  it(`isSomeObject(new String('23'))`, function() {
     expect(locust.isSomeObject(new String('23'))).toBe(false);
  });
  
  it(`isSomeObject({})`, function() {
     expect(locust.isSomeObject({})).toBe(false);
  });
  
  it(`isSomeObject({ a: 10 })`, function() {
     expect(locust.isSomeObject({ a: 10 })).toBe(true);
  });
  
  it(`isSomeObject(new Object())`, function() {
     expect(locust.isSomeObject(new Object())).toBe(false);
  });
  
  it(`isSomeObject([])`, function() {
     expect(locust.isSomeObject([])).toBe(false);
  });
  
  it(`isSomeObject([10, 20])`, function() {
     expect(locust.isSomeObject([10, 20])).toBe(false);
  });
});

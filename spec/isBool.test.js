import * as locust from '../src'

// -------------- isBool -----------------
describe('@locustjs/base test suite: testing isBool', function() {
  it(`isBool(null)`, function() {
     expect(locust.isBool(null)).toBe(false);
  });
  
  it(`isBool(undefined)`, function() {
     expect(locust.isBool(undefined)).toBe(false);
  });
  
  it(`isBool(23)`, function() {
     expect(locust.isBool(23)).toBe(false);
  });
  
  it(`isBool('')`, function() {
     expect(locust.isBool('')).toBe(false);
  });
  
  it(`isBool('23')`, function() {
     expect(locust.isBool('23')).toBe(false);
  });
  
  it(`isBool('true')`, function() {
     expect(locust.isBool('true')).toBe(false);
  });
  
  it(`isBool(true)`, function() {
     expect(locust.isBool(true)).toBe(true);
  });
  
  it(`isBool(new String('23'))`, function() {
     expect(locust.isBool(new String('23'))).toBe(false);
  });
  
  it(`isBool({})`, function() {
     expect(locust.isBool({})).toBe(false);
  });
  
  it(`isBool(new Object())`, function() {
     expect(locust.isBool(new Object())).toBe(false);
  });
  
  it(`isBool(new Boolean())`, function() {
     expect(locust.isBool(new Boolean())).toBe(true);
  });
  
  it(`isBool(new Boolean(true))`, function() {
     expect(locust.isBool(new Boolean(true))).toBe(true);
  });
});

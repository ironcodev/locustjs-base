import * as locust from '../index.js'

// -------------- isPrimitive -----------------
describe('locustjs-base test suite: testing isPrimitive', function() {
  it(`isPrimitive(null)`, function() {
     expect(locust.isPrimitive(null)).toBe(false);
  });
  
  it(`isPrimitive(undefined)`, function() {
     expect(locust.isPrimitive(undefined)).toBe(false);
  });
  
  it(`isPrimitive(23)`, function() {
     expect(locust.isPrimitive(23)).toBe(true);
  });
  
  it(`isPrimitive('')`, function() {
     expect(locust.isPrimitive('')).toBe(true);
  });
  
  it(`isPrimitive('23')`, function() {
     expect(locust.isPrimitive('23')).toBe(true);
  });
  
  it(`isPrimitive(true)`, function() {
     expect(locust.isPrimitive(true)).toBe(true);
  });
  
  it(`isPrimitive(new Boolean(false))`, function() {
     expect(locust.isPrimitive(new Boolean(false))).toBe(true);
  });
  
  it(`isPrimitive(new String(''))`, function() {
     expect(locust.isPrimitive(new String(''))).toBe(true);
  });
  
  it(`isPrimitive(new String('23'))`, function() {
     expect(locust.isPrimitive(new String('23'))).toBe(true);
  });
  
  it(`isPrimitive({})`, function() {
     expect(locust.isPrimitive({})).toBe(false);
  });
  
  it(`isPrimitive(function(){})`, function() {
     expect(locust.isPrimitive(function(){})).toBe(false);
  });
  
  it(`isPrimitive({ a: 10 })`, function() {
     expect(locust.isPrimitive({ a: 10 })).toBe(false);
  });
  
  it(`isPrimitive(new Object())`, function() {
     expect(locust.isPrimitive(new Object())).toBe(false);
  });
  
  it(`isPrimitive([])`, function() {
     expect(locust.isPrimitive([])).toBe(false);
  });
  
  it(`isPrimitive([ 10, 20 ])`, function() {
     expect(locust.isPrimitive([ 10, 20 ])).toBe(false);
  });
  
  it(`isPrimitive(new Array())`, function() {
     expect(locust.isPrimitive(new Array())).toBe(false);
  });
  
  it(`isPrimitive(new Array(10, 20))`, function() {
     expect(locust.isPrimitive(new Array(10, 20))).toBe(false);
  });
});

import * as locust from '../src'

// -------------- isNumber -----------------
describe('locustjs-base test suite: testing isNumber', function() {
  it(`isNumber(null)`, function() {
     expect(locust.isNumber(null)).toBe(false);
  });
  
  it(`isNumber(undefined)`, function() {
     expect(locust.isNumber(undefined)).toBe(false);
  });
  
  it(`isNumber(23)`, function() {
     expect(locust.isNumber(23)).toBe(true);
  });
  
  it(`isNumber(23.45)`, function() {
     expect(locust.isNumber(23.45)).toBe(true);
  });
  
  it(`isNumber(Infinity)`, function() {
     expect(locust.isNumber(Infinity)).toBe(true);
  });
  
  it(`isNumber(Number.MAX_VALUE)`, function() {
     expect(locust.isNumber(Number.MAX_VALUE)).toBe(true);
  });
  
  it(`isNumber('')`, function() {
     expect(locust.isNumber('')).toBe(false);
  });
  
  it(`isNumber('23')`, function() {
     expect(locust.isNumber('23')).toBe(false);
  });
  
  it(`isNumber({})`, function() {
     expect(locust.isNumber({})).toBe(false);
  });
  
  it(`isNumber(new Number())`, function() {
     expect(locust.isNumber(new Number())).toBe(true);
  });
  
  it(`isNumber(new Number(''))`, function() {
     expect(locust.isNumber(new Number(''))).toBe(true);
  });
  
  it(`isNumber(new Number(23.45))`, function() {
     expect(locust.isNumber(new Number(23.45))).toBe(true);
  });
  
  it(`isNumber(new Number('23.45'))`, function() {
     expect(locust.isNumber(new Number('23.45'))).toBe(true);
  });
  
  it(`isNumber(new Number({}))`, function() {
     expect(locust.isNumber(new Number({}))).toBe(false);
  });
  
  it(`isNumber(new Number(null))`, function() {
     expect(locust.isNumber(new Number(null))).toBe(true);
  });
  
  it(`isNumber(new Number(undefined))`, function() {
     expect(locust.isNumber(new Number(undefined))).toBe(false);
  });
});

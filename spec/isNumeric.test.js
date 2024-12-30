import * as locust from '../src'

// -------------- isNumeric -----------------
describe('locustjs-base test suite: testing isNumeric', function() {
  it(`isNumeric(null)`, function() {
     expect(locust.isNumeric(null)).toBe(false);
  });
  
  it(`isNumeric(undefined)`, function() {
     expect(locust.isNumeric(undefined)).toBe(false);
  });
  
  it(`isNumeric(23)`, function() {
     expect(locust.isNumeric(23)).toBe(true);
  });
  
  it(`isNumeric(23.45)`, function() {
     expect(locust.isNumeric(23.45)).toBe(true);
  });
  
  it(`isNumeric(Infinity)`, function() {
     expect(locust.isNumeric(Infinity)).toBe(false);
  });
  
  it(`isNumeric(Number.MAX_VALUE)`, function() {
     expect(locust.isNumeric(Number.MAX_VALUE)).toBe(true);
  });
  
  it(`isNumeric('')`, function() {
     expect(locust.isNumeric('')).toBe(false);
  });
  
  it(`isNumeric('23')`, function() {
     expect(locust.isNumeric('23')).toBe(true);
  });
  
  it(`isNumeric({})`, function() {
     expect(locust.isNumeric({})).toBe(false);
  });
  
  it(`isNumeric(new Number())`, function() {
     expect(locust.isNumeric(new Number())).toBe(true);
  });
  
  it(`isNumeric(new Number(''))`, function() {
     expect(locust.isNumeric(new Number(''))).toBe(true);
  });
  
  it(`isNumeric(new Number(23.45))`, function() {
     expect(locust.isNumeric(new Number(23.45))).toBe(true);
  });
  
  it(`isNumeric(new Number('23.45'))`, function() {
     expect(locust.isNumeric(new Number('23.45'))).toBe(true);
  });
  
  it(`isNumeric(new Number({}))`, function() {
     expect(locust.isNumeric(new Number({}))).toBe(false);
  });
  
  it(`isNumeric(new Number(null))`, function() {
     expect(locust.isNumeric(new Number(null))).toBe(true);
  });
  
  it(`isNumeric(new Number(undefined))`, function() {
     expect(locust.isNumeric(new Number(undefined))).toBe(false);
  });
});

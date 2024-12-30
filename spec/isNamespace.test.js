import * as locust from '../src'

// -------------- isNamespace -----------------
describe('locustjs-base test suite: testing isNamespace', function() {
  it(`isNamespace(null)`, function() {
     expect(locust.isNamespace(null)).toBe(false);
  });
  
  it(`isNamespace(undefined)`, function() {
     expect(locust.isNamespace(undefined)).toBe(false);
  });
  
  it(`isNamespace(23)`, function() {
     expect(locust.isNamespace(23)).toBe(false);
  });
  
  it(`isNamespace('')`, function() {
     expect(locust.isNamespace('')).toBe(false);
  });
  
  it(`isNamespace('a')`, function() {
     expect(locust.isNamespace('a')).toBe(true);
  });
  
  it(`isNamespace('a.')`, function() {
     expect(locust.isNamespace('a.')).toBe(false);
  });
  
  it(`isNamespace('a.a')`, function() {
     expect(locust.isNamespace('a.a')).toBe(true);
  });
  
  it(`isNamespace('a.a._')`, function() {
     expect(locust.isNamespace('a.a._')).toBe(false);
  });
  
  it(`isNamespace('a..a')`, function() {
     expect(locust.isNamespace('a..a')).toBe(false);
  });
  
  it(`isNamespace('a.a.a_')`, function() {
     expect(locust.isNamespace('a.a.a_')).toBe(true);
  });
  
  it(`isNamespace('a.1')`, function() {
     expect(locust.isNamespace('a.1')).toBe(false);
  });
  
  it(`isNamespace('a.a1')`, function() {
     expect(locust.isNamespace('a.a1')).toBe(true);
  });
  
  it(`isNamespace('_')`, function() {
     expect(locust.isNamespace('_')).toBe(false);
  });
  
  it(`isNamespace('a,b')`, function() {
     expect(locust.isNamespace('a,b')).toBe(false);
  });
  
  it(`isNamespace('a-b')`, function() {
     expect(locust.isNamespace('a-b')).toBe(false);
  });
  
  it(`isNamespace('a:b')`, function() {
     expect(locust.isNamespace('a:b')).toBe(false);
  });
  
  it(`isNamespace('1a')`, function() {
     expect(locust.isNamespace('1a')).toBe(false);
  });
  
  it(`isNamespace(new String('a'))`, function() {
     expect(locust.isNamespace(new String('a'))).toBe(true);
  });
  
  it(`isNamespace(new String('23'))`, function() {
     expect(locust.isNamespace(new String('23'))).toBe(false);
  });
});

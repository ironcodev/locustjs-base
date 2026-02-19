import * as locust from '../src'

// -------------- isEmpty -----------------
describe('@locustjs/base test suite: testing isEmpty()', function() {
  it(`isEmpty(null)`, function() {
     expect(locust.isEmpty(null)).toBe(true);
  });
  
  it(`isEmpty(undefined)`, function() {
     expect(locust.isEmpty(undefined)).toBe(true);
  });
  
  it(`isEmpty('')`, function() {
     expect(locust.isEmpty('')).toBe(true);
  });
  
  it(`isEmpty('   ')`, function() {
     expect(locust.isEmpty('   ')).toBe(true);
  });
  
  it(`isEmpty(new String(''))`, function() {
     expect(locust.isEmpty(new String(''))).toBe(true);
  });
  
  it(`isEmpty(new String('   '))`, function() {
     expect(locust.isEmpty(new String('   '))).toBe(true);
  });
});

import { forEach } from '../index.esm.js'

// -------------- forEach -----------------
describe('locustjs-base test suite: testing forEach', function() {
	it(`should fail not specifying forEach's callback`, function() {
		let result;
		
		try {
			forEach({});
		} catch {
			result = true
		}
		expect(result).toBe(true);
	});

	it(`should fail passing not a function to forEach's callback`, function() {
		let result;
		
		try {
			forEach({}, 'foo');
		} catch {
			result = true
		}
		expect(result).toBe(true);
	});
	
	it(`should count to 2 forEach({a: 1, b: 2}, a => count++)`, function() {
		let count = 0;
		forEach({ a: 1, b: 2}, a => count++);
		
		expect(count).toBe(2);
	});
	
	it(`should report 60 forEach([10, 20, 30], a => sum += a.value)`, function() {
		let sum = 0;
		forEach([10, 20, 30], a => sum += a.value);
		
		expect(sum).toBe(60);
	});
	
	it(`should break on third item: forEach([10, 20, 30, 40], a => { if (a.index == 2) { index = a.index; a.break = true } })`, function() {
		let index = -1;
		
		forEach([10, 20, 30, 40], a => {
			if (a.index == 2) {
				index = a.index;
				a.break = true
			}
		})
		
		expect(index).toBe(2);
	});
	
	it(`should break on third item and return 30: forEach([10, 20, 30, 40], a => { if (a.index == 2) { a.break = true; return a.value } })`, function() {
		let value = forEach([10, 20, 30, 40], a => {
			if (a.index == 2) {
				a.break = true;
				return a.value
			}
		})
		
		expect(value).toBe(30);
	});
	
	it(`should report 'abc' forEach({a: 10, b: 20, c: 30}, a => keys += a.key)`, function() {
		let keys = '';
		forEach({a: 10, b: 20, c: 30}, a => keys += a.key)
		
		expect(keys).toBe('abc');
	});
	
	it(`should report 3 forEach({a: 10, b: 20, c: 30}, a => { a.break = true; return a.count;})`, function() {
		let count = forEach({a: 10, b: 20, c: 30}, a => {
			a.break = true;
			return a.count;
		})
		
		expect(count).toBe(3);
	});
});

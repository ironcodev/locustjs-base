const isString       = (x, n) => (typeof x == 'string' || x instanceof String) && (n == undefined || x.length == n);
const isNumber       = (x) => (typeof x == 'number' || x instanceof Number) && !isNaN(x);
const isDate         = (x) => x instanceof Date && !isNaN(x.valueOf());
const isBool         = (x) => typeof x == 'boolean' || x instanceof Boolean;
const isaN      	 = isNumber;
const isBasic		 = (x) => {
	const type = typeof x;
	return type == 'string' || type == 'number' || type == 'boolean' || isDate(x);
}
const isPrimitive    = (x) => isString(x) || isNumber(x) || isDate(x) || isBool(x);
const isNull		 = (x) => x == null;
const isEmpty        = (x) => isNull(x) || (isString(x) && x.trim() == '');
const isSomeString   = (x) => isString(x) && x.trim() != '';
const isAnObject     = (x) => typeof x == 'object' && !isNull(x);
const isObject       = (x) => isAnObject(x) && !isPrimitive(x);
const isSomething	 = (x) => !isNull(x);
const isSomeObject   = (x) => isObject(x) && Object.keys(x).length > 0;
const isFunction     = (x) => typeof x == 'function' && typeof x.nodeType !== 'number';
const isNumeric      = (x) => (isSomeString(x) || isNumber(x)) && !isNaN(x - parseFloat(x));	// borrowed from jQuery
const isSomeNumber	 = (x) => isNumeric(x) && x > 0;
const isjQueryElement = (x) => isObject(x) && isSomeString(x.jquery);
const hasDate        = (x) => (isDate(x) || isString(x) || isNumber(x)) && !isNaN(Date.parse(x));
const hasBool		 = (x) => isBool(x) || (isSomeString(x) && ['true', 'false'].indexOf(x.trim().toLowerCase()) >= 0);
const isFormatedDate = (x) => isSomeString(x) && (
							/^\d{1,4}\.\d{1,4}\.\d{1,4}$/.test(x) ||
							/^\d{1,4}-\d{1,4}-\d{1,4}$/.test(x) ||
							/^\d{1,4}\/\d{1,4}\/\d{1,4}$/.test(x) ||
							/^\d{1,4}\\\d{1,4}\\\d{1,4}$/.test(x)
						);
const isArray		 = Array.isArray;
const isIterable	 = function (x) {	 	// source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/@@iterator
							return (Symbol.iterator in Object.getPrototypeOf(x));
								/*	or "Symbol.iterator in Object.__proto__" 
									or "it[Symbol.iterator]" */
						};
const isSomeArray	 = (x) => isArray(x) && x.length > 0;
const isNamespace	 = (x) => isSomeString(x) && /^[a-zA-Z]\w*(\.[a-zA-Z]\w*)*$/.test(x);
const isSubClassOf 	 = (child, parent) => child && isFunction(parent) && (child === parent || child.prototype instanceof parent);
const forEach		 = (x, callback) => {
	let result;
	
	if (!isFunction(callback)) {
		throw `expected function for callback.`
	}
	
	if (!isEmpty(x)) {
		const _keys = Object.keys(x);

		for (let i = 0; i < _keys.length; i++) {
			const args = {
				source: x,
				index: i,
				key: _keys[i],
				value: x[_keys[i]],
				count: _keys.length
			};
			
			const r = callback(args);

			if (args.break) {
				result = r || args.result;

				break;
			}
		}
	}
	
	return result;
}

const equals = function (objA, objB, strict = false) {
	if (isPrimitive(objA) || isEmpty(objA) || isFunction(objA)) {
		return strict ? objA === objB : objA == objB;
	}
	
	if (isArray(objA)) {
		if (isArray(objB) && objA.length == objB.length) {
			for (let i = 0; i < objA.length; i++) {
				if (!equals(objA[i], objB[i], strict)) {
					return false;
				}
			}
			
			return true;
		} else {
			return false;
		}
	}
	
	const keysA = Object.keys(objA);
	const keysB = Object.keys(objB);
	
	if (keysA.length != keysB.length) {
		return false;
	}
	
	for (let key of keysA) {
		if (!equals(objA[key], objB[key], strict)) {
			return false;
		}
	}
	
	return true;
}

const similars = function (objA, objB) {
	if (isPrimitive(objA)) {
		if (isPrimitive(objB)) {
			return typeof objA == typeof objB;
		}
		
		return false;
	}
	
	if (isArray(objA)) {
		if (isArray(objB) && objA.length == objB.length) {
			for (let i = 0; i < objA.length; i++) {
				if (!similars(objA[i], objB[i])) {
					return false;
				}
			}
			
			return true;
		} else {
			return false;
		}
	}
	
	const keysA = Object.keys(objA);
	const keysB = Object.keys(objB);
	
	if (keysA.length != keysB.length) {
		return false;
	}
	
	for (let key of keysA) {
		if (!similars(objA[key], objB[key])) {
			return false;
		}
	}
	
	return true;
}

export {
	isString,
	isNumber,
	isDate,
	isBool,
	isaN,
	isBasic,
	isPrimitive,
	isNull,
	isEmpty,
	isSomeString,
	isAnObject,
	isObject,
	isSomething,
	isSomeObject,
	isFunction,
	isNumeric,
	isSomeNumber,
	isjQueryElement,
	hasDate,
	hasBool,
	isFormatedDate,
	isArray,
	isIterable,
	isSomeArray,
	isNamespace,
	isSubClassOf,
	forEach,
	equals,
	similars
}

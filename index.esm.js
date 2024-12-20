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
const isNull		 = (x) => x === null;
const isUndefined	 = (x) => x === undefined;
const isNullOrEmpty	 = (x) => isNull(x) || isUndefined(x) || (typeof x == 'number' && isNaN(x)) || (isString(x) && x.length == 0);
const isEmpty        = (x) => isNull(x) || isUndefined(x) || (typeof x == 'number' && isNaN(x)) || (isString(x) && x.trim() == '');
const isSomeString   = (x) => isString(x) && x.trim() != '';
const isAnObject     = (x) => typeof x == 'object' && !isNull(x);
const isObject       = (x) => isAnObject(x) && !isPrimitive(x);
const isSomething	 = (x) => !isNull(x) && !isUndefined(x) && !(typeof x == 'number' && isNaN(x));
const isSomeObject   = (x) => isObject(x) && !isArray(x) && Object.keys(x).length > 0;
const isFunction     = (x) => typeof x == 'function' && typeof x.nodeType !== 'number';
const isNumeric      = (x) => (isSomeString(x) || isNumber(x)) && !isNaN(x - parseFloat(x));	// borrowed from jQuery
const isInteger		 = Number.isInteger;
const isFloat		 = (x) => isNumeric(x) && (Math.floor(x) - x) != 0;
const isSomeNumber	 = (x) => isNumeric(x) && x != 0;
const isjQueryElement = (x) => isObject(x) && isSomeString(x.jquery);
const hasDate        = (x) => (isDate(x) || isString(x) || isNumber(x)) && !isNaN(Date.parse(x));
const hasBool		 = (x, ignoreCase = true) => isBool(x) || (isSomeString(x) && ['true', 'false'].indexOf(ignoreCase ? x.trim().toLowerCase(): x.trim()) >= 0);
const isFormatedDate = (x) => isSomeString(x) && (
							/^\d{1,4}\.\d{1,4}\.\d{1,4}$/.test(x) ||
							/^\d{1,4}-\d{1,4}-\d{1,4}$/.test(x) ||
							/^\d{1,4}\/\d{1,4}\/\d{1,4}$/.test(x) ||
							/^\d{1,4}\\\d{1,4}\\\d{1,4}$/.test(x)
						);
const isArray		 = Array.isArray;
const isIterable	 = function (x) {	 	// source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/@@iterator
	if (!x) {
		return false;
	}

	if (typeof x[Symbol.iterator] == 'function') {
		return true;
	}

	let parent = Object.getPrototypeOf(x);

	if (parent && typeof parent[Symbol.iterator] == 'function') {	/*	or "Symbol.iterator in Object.__proto__" or "it[Symbol.iterator]" */
		return true;
	}

	return false;
};
const isSomeArray	 = (x) => isArray(x) && x.length > 0;
const isNamespace	 = (x) => isSomeString(x) && /^[a-zA-Z]\w*(\.[a-zA-Z]\w*)*$/.test(x);
const isSubClassOf 	 = (child, parent) => child && isFunction(parent) && (child === parent || child.prototype instanceof parent);
const forEach		 = (x, callback) => {
	let result = [];
	
	if (isUndefined(callback)) {
		callback = () => {}
	}

	if (!isFunction(callback)) {
		throw `@locustjs/base: forEach: expected function for callback.`
	}
	
	if (!isEmpty(x)) {
		if (isArray(x)) {
			for (let i = 0; i < x.length; i++) {
				const args = {
					source: x,
					index: i,
					key: i,
					value: x[i],
					count: x.length
				};
				
				const r = callback(args);
	
				if (args.break) {
					break;
				}

				if (!args.skip) {
					result.push(r || args.result || { index: i, key: i, value: x[i] });
				}
			}
		} else if (isObject(x)) {
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
					break;
				}
				
				if (!args.skip) {
					result.push(r || args.result || { index: i, key: _keys[i], value: x[i] });
				}
			}
		}
	}
	
	return result;
}

const equals = function (objA, objB, strict = false) {
	if (isPrimitive(objA) || isNullOrEmpty(objA) || isFunction(objA)) {
		return strict ? objA === objB : objA == objB;
	}

	if (isPrimitive(objB) || isNullOrEmpty(objB) || isFunction(objB)) {
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

const query = (obj, path) => {
	if ((isSomeObject(obj) || isSomeArray(obj)) && isSomeString(path)) {
		const arr = path.split('.')
		let cur = obj

		for (let prop of arr) {
			if (cur == undefined) {
				break
			}

			const openBracketIndex = prop.indexOf('[')
			let index;
			let propName;

			if (openBracketIndex >= 0) {
				const closeBracketIndex = prop.indexOf(']', openBracketIndex);

				if (closeBracketIndex > 0) {
					index = prop.substr(openBracketIndex + 1, closeBracketIndex - openBracketIndex - 1)

					if (isNumeric(index)) {
						index = parseInt(index)
						propName = prop.substr(0, openBracketIndex)
					}
				}
			} else {
				propName = prop
			}
			
			if (propName) {
				cur = cur[propName]

				if (isArray(cur) && isNumber(index) && index >= 0 && index < cur.length) {
					cur = cur[index]
				}
			} else {
				if (isArray(cur) && isNumber(index) && index >= 0 && index < cur.length) {
					cur = cur[index]
				} else {
					cur = undefined;
					
					break;
				}
			}
		}

		return cur;
	}
}

const set = (obj, path, value) => {
	if (isObject(obj) && isSomeString(path)) {
		let current = obj;
		const parts = path
						.split(".")
						.map((x) => x.trim())
						.filter((x) => !isEmpty(x));

		for (let i = 0; i < parts.length; i++) {
			const part = parts[i];

			if (!isObject(current[part])) {
				if (i == parts.length - 1) {
					current[part] = value;
					break;
				}

				current[part] = {};
			}

			current = current[part];
		}
	}

	return obj;
};

class ConversionBase {
	get _name() {
		return this.constructor.name
	}
	toBool(x) {
		throw `${this.name}.toBool() is not implemented`
	}
	toNumber(x) {
		throw `${this.name}.toNumber() is not implemented`
	}
	toDate(x) {
		throw `${this.name}.toDate() is not implemented`
	}
	toString(x) {
		throw `${this.name}.toString() is not implemented`
	}
}

class ConversionDefault extends ConversionBase {
	toBool(x) {
		if (hasBool(x)) {
			if (isBool(x)) {
				return x;
			}
			
			return x.trim().toLowerCase() == 'true';
		}
		if (isSomeNumber(x)) {
			return true;
		}

		return false;
	}
	toNumber(x) {
		if (isNumeric(x)) {
			return new Number(x)
		}

		return 0;
	}
	toDate(x, defaultValue = new Date()) {
		if (isDate(x)) {
			return x
		}
		if (isFormatedDate(x)) {
			return new Date(x)
		}
		if (isNumeric(x)) {
			return new Date(x)
		}
		if (hasDate(x)) {
			return new Date(Date.parse(x))
		}

		return defaultValue
	}
	toString(x) {
		if (isNullOrEmpty(x)) {
			return ''
		}

		return x.toString();
	}
}

let convert = new ConversionDefault()
class Convert {
	static get instance() {
		return convert;
	}
	static set instance(x) {
		if (!(x instanceof ConversionBase)) {
			throw `input type must be a subclass of ConversionBase`
		}

		convert = x
	}
	static toBool(x) {
		return convert.toBool(x)
	}
	static toNumber(x) {
		return convert.toNumber(x)
	}
	static toDate(x) {
		return convert.toDate(x)
	}
	static toString(x) {
		return convert.toString(x)
	}
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
	isUndefined,
	isNullOrEmpty,
	isEmpty,
	isSomeString,
	isAnObject,
	isObject,
	isSomething,
	isSomeObject,
	isFunction,
	isNumeric,
	isInteger,
	isFloat,
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
	//similars,	=> not ready yet
	query,
	set,
	convert,
	ConversionBase,
	ConversionDefault,
	Convert
}

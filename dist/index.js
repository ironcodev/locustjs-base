'use strict';

const isString = (x, n) => (typeof x == 'string' || x instanceof String) && (n == undefined || x.length == n);
const isNumber = (x) => (typeof x == 'number' || x instanceof Number) && !isNaN(x);
const isDate = (x) => x instanceof Date && !isNaN(x.valueOf());
const isBool = (x) => typeof x == 'boolean' || x instanceof Boolean;
const isaN = isNumber;
const isBasic = (x) => {
	const type = typeof x;
	return type == 'string' || type == 'number' || type == 'boolean' || isDate(x);
};
const isPrimitive = (x) => isString(x) || isNumber(x) || isDate(x) || isBool(x);
const isNull = (x) => x === null;
const isUndefined = (x) => x === undefined;
const isNullOrUndefined = (x) => isNull(x) || isUndefined(x);
const isEmpty = (x, includeAllWhitespaces = true) => isNull(x) ||
													 isUndefined(x) ||
													 (typeof x == 'number' && isNaN(x)) ||
													 (isString(x) && (x.length == 0 || (x.trim() == '' && includeAllWhitespaces)));
const isSomeString = (x, includeAllWhitespaces = true) => isString(x) && (includeAllWhitespaces ? x.trim() != '': true);
const isNullOrEmpty = (x) => isEmpty(x, false);
const isAnObject = (x) => typeof x == 'object' && !isNull(x);
const isObjectish = isAnObject;
const isObject = (x) => isAnObject(x) && !isPrimitive(x) && !isArray(x);
const isSomething = (x) => !isNull(x) && !isUndefined(x) && !(typeof x == 'number' && isNaN(x));
const isNothing = (x) => isEmpty(x) || (isAnObject(x) && !isSomeObject(x));
const isSomeObject = (x) => isObject(x) && Object.keys(x).length > 0;
const isFunction = (x) => typeof x == 'function' && typeof x.nodeType !== 'number';
const isNumeric = (x) => (isSomeString(x) || isNumber(x)) && !isNaN(x - parseFloat(x));	// borrowed from jQuery
const isInteger = Number.isInteger;
const isFloat = (x) => isNumeric(x) && (Math.floor(x) - x) != 0;
const isSomeNumber = (x) => isNumeric(x) && x != 0;
const isjQueryElement = (x) => isObject(x) && isSomeString(x.jquery);
const hasDate = (x) => (isDate(x) || isString(x) || isNumber(x)) && !isNaN(Date.parse(x));
const hasBool = function (x, options) {
	let _options;
		
	if (isString(options)) {
		_options = {
			pascal: options.indexOf('p') >= 0,
			upper: options.indexOf('u') >= 0,
			trim: options.indexOf('t') >= 0
		};
	} else {
		_options = Object.assign({
			pascal: true,
			upper: true,
			trim: true
		}, options);
	}
	
	if (isBool(x)) {
		return true;
	}

	if (isString(x)) {
		if (_options.trim) {
			x = x.trim();
		}
		if (x == 'true' || x == 'false') {
			return true;
		}
		if (_options.pascal) {
			if (x == 'True' || x == 'False') {
				return true
			}
		}
		if (_options.upper) {
			if (x == 'TRUE' || x == 'FALSE') {
				return true
			}
		}
	}

	return false;
};
const isFormatedDate = (x) => isSomeString(x) && (
	/^\d{1,4}\.\d{1,4}\.\d{1,4}$/.test(x) ||
	/^\d{1,4}-\d{1,4}-\d{1,4}$/.test(x) ||
	/^\d{1,4}\/\d{1,4}\/\d{1,4}$/.test(x) ||
	/^\d{1,4}\\\d{1,4}\\\d{1,4}$/.test(x)
);
const isArray = Array.isArray;
const isIterable = function (x) {	 	// source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/@@iterator
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
const isSomeArray = (x) => isArray(x) && x.length > 0;
const isNamespace = (x) => isSomeString(x) && /^[a-zA-Z]\w*(\.[a-zA-Z]\w*)*$/.test(x);
const isSubClassOf = (child, parent) => child && isFunction(parent) && (child === parent || child.prototype instanceof parent);
const forEach = (x, callback) => {
	let result = [];

	if (isUndefined(callback)) {
		callback = () => { };
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
		} else if (isIterable(x)) {
			let i = 0;

			for (let item of x) {
				const args = {
					source: x,
					index: i,
					key: i,
					value: item,
					count: undefined
				};

				const r = callback(args);

				if (args.break) {
					break;
				}

				if (!args.skip) {
					result.push(r || args.result || { index: i, key: i, value: item });
				}

				i++;
			}
		}
	}

	return result;
};
const foreach = forEach;

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
};

function extractPropAndIndexes(prop) {
	let propName;
	let error;
	let start = 0;
	let indexes = [];
	let i = 0;
	let openBracketIndex = -1;
	let closeBracketIndex = -1;

	do {
		openBracketIndex = prop.indexOf('[', start);

		if (openBracketIndex >= 0) {
			if (propName == null) {
				propName = prop.substr(0, openBracketIndex);
			}

			let index;
			closeBracketIndex = prop.indexOf(']', openBracketIndex);

			if (closeBracketIndex > 0) {
				index = prop.substr(openBracketIndex + 1, closeBracketIndex - openBracketIndex - 1);

				if (isEmpty(index)) {
					error = { index: i, err: 1, msg: 'no index' };
				} else {
					if (isNumeric(index)) {
						index = parseInt(index);
						indexes.push(index);
					} else {
						error = { index: i, err: 2, msg: 'invalid index' };
					}
				}
			} else {
				error = { err: 3, msg: 'missing closing bracket' };
			}

			i++;
			start = closeBracketIndex + 1;
		} else {
			if (propName == null) {
				propName = prop;
			}

			break;
		}

		if (error) {
			break;
		}
	} while (true);

	if (indexes.length > 0 && closeBracketIndex != prop.length - 1 && !error) {
		error = { err: 4, msg: 'extra characters after last ]' };
	}

	return {
		propName,
		indexes,
		error
	}
}

const query = (obj, path) => {
	if ((isSomeObject(obj) || isSomeArray(obj)) && isSomeString(path)) {
		const arr = path.split('.');
		let cur = obj;

		for (let prop of arr) {
			if (cur == undefined) {
				break
			}

			const parts = extractPropAndIndexes(prop);

			if (parts.error) {
				throw `index: ${parts.error.index}, ${parts.error.msg}`
			}

			const propName = parts.propName;
			
			if (isObject(cur) && cur[propName] == undefined) {
				break
			}

			if (propName) {
				cur = cur[propName];
			}

			for (let index of parts.indexes) {
				cur = cur[index];

				if (cur == undefined) {
					break
				}
			}
		}

		return cur;
	}
};
const set = (obj, path, value) => {
	if (isAnObject(obj) && isSomeString(path)) {
		const arr = path.split('.');
		let cur = obj;
		let prev = cur;
		let prevProp = '';
		let i = 0;
		let propName;
		let index;

		for (let prop of arr) {
			const parts = extractPropAndIndexes(prop);
			
			if (parts.error) {
				throw `index: ${parts.error.index}, ${parts.error.msg}`
			}

			propName = parts.propName;

			if (propName && !isObject(cur)) {
				if (index != undefined) {
					cur = prev[index] = {};
				} else if (prevProp) {
					cur = prev[prevProp] = {};
				}
			} else if (!propName && parts.indexes.length && !isArray(cur)) {
				if (index != undefined) {
					cur = prev[index] = [];
				} else if (prevProp) {
					cur = prev[prevProp] = [];
				}
			}
			
			prev = cur;

			if (propName) {
				cur = cur[propName];
	
				index = undefined;
	
				if (cur == undefined) {
					if (parts.indexes.length) {
						cur = prev[propName] = [];
					} else {
						cur = prev[propName] = {};
					}
				} else {
					if (parts.indexes.length && !isArray(cur)) {
						cur = prev[propName] = [];
					} else if (!parts.indexes.length && !isObject(cur)) {
						cur = prev[propName] = {};
					}
				}
			}

			let pi = 0;

			for (index of parts.indexes) {
				prev = cur;
				cur = cur[index];

				if (cur == undefined) {
					if (pi == parts.indexes.length - 1) {
						cur = prev[index] = {};
					} else {
						cur = prev[index] = [];
					}
				} else if (pi < parts.indexes.length - 1 && !isArray(cur)) {
					cur = prev[index] = [];
				}

				pi++;
			}

			i++;

			prevProp = propName;

			if (parts.indexes.length) {
				propName = '';
			}
		}

		if (i == arr.length) {
			if (propName) {
				prev[propName] = value;
			} else if (index != undefined) {
				prev[index] = value;
			}
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

exports.convert = new ConversionDefault();

class Convert {
	static get instance() {
		return exports.convert;
	}
	static set instance(x) {
		if (!(x instanceof ConversionBase)) {
			throw `input type must be a subclass of ConversionBase`
		}

		exports.convert = x;
	}
	static toBool(x) {
		return exports.convert.toBool(x)
	}
	static toNumber(x) {
		return exports.convert.toNumber(x)
	}
	static toDate(x) {
		return exports.convert.toDate(x)
	}
	static toString(x) {
		return exports.convert.toString(x)
	}
}

exports.ConversionBase = ConversionBase;
exports.ConversionDefault = ConversionDefault;
exports.Convert = Convert;
exports.equals = equals;
exports.forEach = forEach;
exports.foreach = foreach;
exports.hasBool = hasBool;
exports.hasDate = hasDate;
exports.isAnObject = isAnObject;
exports.isArray = isArray;
exports.isBasic = isBasic;
exports.isBool = isBool;
exports.isDate = isDate;
exports.isEmpty = isEmpty;
exports.isFloat = isFloat;
exports.isFormatedDate = isFormatedDate;
exports.isFunction = isFunction;
exports.isInteger = isInteger;
exports.isIterable = isIterable;
exports.isNamespace = isNamespace;
exports.isNothing = isNothing;
exports.isNull = isNull;
exports.isNullOrEmpty = isNullOrEmpty;
exports.isNullOrUndefined = isNullOrUndefined;
exports.isNumber = isNumber;
exports.isNumeric = isNumeric;
exports.isObject = isObject;
exports.isObjectish = isObjectish;
exports.isPrimitive = isPrimitive;
exports.isSomeArray = isSomeArray;
exports.isSomeNumber = isSomeNumber;
exports.isSomeObject = isSomeObject;
exports.isSomeString = isSomeString;
exports.isSomething = isSomething;
exports.isString = isString;
exports.isSubClassOf = isSubClassOf;
exports.isUndefined = isUndefined;
exports.isaN = isaN;
exports.isjQueryElement = isjQueryElement;
exports.query = query;
exports.set = set;

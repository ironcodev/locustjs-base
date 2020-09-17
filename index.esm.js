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
const hasDate        = (x) => (isDate(x) || isString(x) || isNumber(x)) && !isNaN(Date.parse(x));
const hasBool		 = (x) => isBool(x) || (isSomeString(x) && ['true', 'false'].indexOf(x.trim().toLowerCase()) >= 0);
const isFormatedDate = (x) => isSomeString(x) && (
							/^\d{1,4}\.\d{1,4}\.\d{1,4}$/.test(x) ||
							/^\d{1,4}-\d{1,4}-\d{1,4}$/.test(x) ||
							/^\d{1,4}\/\d{1,4}\/\d{1,4}$/.test(x) ||
							/^\d{1,4}\\\d{1,4}\\\d{1,4}$/.test(x)
						);
const isArray		 = Array.isArray;
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

class BaseEnum {
    constructor(values, name) {
        this.name = name;

        if (isArray(values)) {
            for (let i; i < values.length; i++) {
                const value = values[i];

                if (isPrimitive(value)) {
                    this[i] = value;
                    this[value] = i;
                }
            }
        } else if (isSomeObject(values)) {
            for (let key of Object.keys(values)) {
				const value = values[key];

				if (isPrimitive(value)) {
					this[key] = value;
                    this[value] = key;
                }
            }
        }
    }
    equals(value1, value2) {
        return Enum.equals(this, value1, value2);
    }
	getNames() {
		let result = [];

        for (let key of Object.keys(this)) {
            if (typeof key == 'string' && isPrimitive(this[key]) && !isNumeric(key) && key != 'name') {
                result.push(key)
            }
        }

        return result;
	}
    getValues() {
        let result = [];

        for (let key of Object.keys(this)) {
            if (typeof key == 'string' && isPrimitive(this[key]) && !isNumeric(key) && key != 'name') {
                result.push(this[key])
            }
        }

        return result;
    }
	toArray() {
        let result = [];

        for (let key of Object.keys(this)) {
            if (typeof key == 'string' && isPrimitive(this[key]) && !isNumeric(key) && key != 'name') {
                result.push({ name: key, value: this[key] })
            }
        }

        return result;
    }
	isValid(value) {
		return !(value == null || this[value] == undefined);
	}
	getString(value, defaultValue) {
		if (!this.isValid(defaultValue)) {
			for (let key of Object.keys(this)) {
				if (typeof key == 'string' && isPrimitive(this[key]) && !isNumeric(key) && key != 'name') {
					defaultValue = key;
					
					break;
				}
			}
		}
		
		let result = this.isValid(value) ? value: defaultValue ? defaultValue: undefined;
		
		if (result != undefined) {
			if (typeof result != 'string') {
				result = this[result];
			}
		}
		
		return result;
	}
	getNumber(value, defaultValue) {
		if (!this.isValid(defaultValue)) {
			for (let key of Object.keys(this)) {
				if (typeof key == 'string' && isPrimitive(this[key]) && !isNumeric(key) && key != 'name') {
					defaultValue = key;
					
					break;
				}
			}
		}
		
		let result = this.isValid(value) ? value: defaultValue ? defaultValue: undefined;
		
		if (result != undefined) {
			if (!isNumber(result)) {
				result = this[result];
			}
		}
		
		return result;
	}
}

const Enum = {
    define: function (values, name) {
        const result = Object.freeze(new BaseEnum(values, name));

        return result;
    },
    equals: function (enumType, value1, value2) {
        let result = false;

        if (isSomeObject(enumType) && isPrimitive(value1) && isPrimitive(value2)) {
            if (isNumeric(value1)) {
                if (isNumeric(value2)) {
                    result = value1 == value2 && enumType[value1] != undefined;
                } else {
                    result = value1 == enumType[value2];
                }
            } else {
                if (isNumeric(value2)) {
                    result = value1 == enumType[value2];
                } else {
                    result = value1 == value2 && enumType[value1] != undefined;
                }
            }
        }

        return result;
    }
}

const NotImplementedException = x => `${x} is not implemented`;

export {
	NotImplementedException,
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
	hasDate,
	hasBool,
	isFormatedDate,
	isArray,
	isSomeArray,
	isNamespace,
	isSubClassOf,
	forEach,
	BaseEnum,
	Enum,
	equals
}

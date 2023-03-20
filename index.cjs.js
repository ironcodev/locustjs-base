"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.similars = exports.isjQueryElement = exports.isaN = exports.isSubClassOf = exports.isString = exports.isSomething = exports.isSomeString = exports.isSomeObject = exports.isSomeNumber = exports.isSomeArray = exports.isPrimitive = exports.isObject = exports.isNumeric = exports.isNumber = exports.isNullOrEmpty = exports.isNull = exports.isNamespace = exports.isIterable = exports.isFunction = exports.isFormatedDate = exports.isEmpty = exports.isDate = exports.isBool = exports.isBasic = exports.isArray = exports.isAnObject = exports.hasDate = exports.hasBool = exports.forEach = exports.equals = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var isString = function isString(x, n) {
  return (typeof x == 'string' || x instanceof String) && (n == undefined || x.length == n);
};
exports.isString = isString;
var isNumber = function isNumber(x) {
  return (typeof x == 'number' || x instanceof Number) && !isNaN(x);
};
exports.isNumber = isNumber;
var isDate = function isDate(x) {
  return x instanceof Date && !isNaN(x.valueOf());
};
exports.isDate = isDate;
var isBool = function isBool(x) {
  return typeof x == 'boolean' || x instanceof Boolean;
};
exports.isBool = isBool;
var isaN = isNumber;
exports.isaN = isaN;
var isBasic = function isBasic(x) {
  var type = _typeof(x);
  return type == 'string' || type == 'number' || type == 'boolean' || isDate(x);
};
exports.isBasic = isBasic;
var isPrimitive = function isPrimitive(x) {
  return isString(x) || isNumber(x) || isDate(x) || isBool(x);
};
exports.isPrimitive = isPrimitive;
var isNull = function isNull(x) {
  return x == null;
};
exports.isNull = isNull;
var isNullOrEmpty = function isNullOrEmpty(x) {
  return isNull(x) || isString(x) && x.length == 0;
};
exports.isNullOrEmpty = isNullOrEmpty;
var isEmpty = function isEmpty(x) {
  return isNull(x) || typeof x == 'number' && isNaN(x) || isString(x) && x.trim() == '';
};
exports.isEmpty = isEmpty;
var isSomeString = function isSomeString(x) {
  return isString(x) && x.trim() != '';
};
exports.isSomeString = isSomeString;
var isAnObject = function isAnObject(x) {
  return _typeof(x) == 'object' && !isNull(x);
};
exports.isAnObject = isAnObject;
var isObject = function isObject(x) {
  return isAnObject(x) && !isPrimitive(x);
};
exports.isObject = isObject;
var isSomething = function isSomething(x) {
  return !isNull(x);
};
exports.isSomething = isSomething;
var isSomeObject = function isSomeObject(x) {
  return isObject(x) && !isArray(x) && Object.keys(x).length > 0;
};
exports.isSomeObject = isSomeObject;
var isFunction = function isFunction(x) {
  return typeof x == 'function' && typeof x.nodeType !== 'number';
};
exports.isFunction = isFunction;
var isNumeric = function isNumeric(x) {
  return (isSomeString(x) || isNumber(x)) && !isNaN(x - parseFloat(x));
}; // borrowed from jQuery
exports.isNumeric = isNumeric;
var isSomeNumber = function isSomeNumber(x) {
  return isNumeric(x) && x > 0;
};
exports.isSomeNumber = isSomeNumber;
var isjQueryElement = function isjQueryElement(x) {
  return isObject(x) && isSomeString(x.jquery);
};
exports.isjQueryElement = isjQueryElement;
var hasDate = function hasDate(x) {
  return (isDate(x) || isString(x) || isNumber(x)) && !isNaN(Date.parse(x));
};
exports.hasDate = hasDate;
var hasBool = function hasBool(x) {
  return isBool(x) || isSomeString(x) && ['true', 'false'].indexOf(x.trim().toLowerCase()) >= 0;
};
exports.hasBool = hasBool;
var isFormatedDate = function isFormatedDate(x) {
  return isSomeString(x) && (/^\d{1,4}\.\d{1,4}\.\d{1,4}$/.test(x) || /^\d{1,4}-\d{1,4}-\d{1,4}$/.test(x) || /^\d{1,4}\/\d{1,4}\/\d{1,4}$/.test(x) || /^\d{1,4}\\\d{1,4}\\\d{1,4}$/.test(x));
};
exports.isFormatedDate = isFormatedDate;
var isArray = Array.isArray;
exports.isArray = isArray;
var isIterable = function isIterable(x) {
  // source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/@@iterator
  if (!x) {
    return false;
  }
  if (typeof x[Symbol.iterator] == 'function') {
    return true;
  }
  var parent = Object.getPrototypeOf(x);
  if (parent && typeof parent[Symbol.iterator] == 'function') {
    /*	or "Symbol.iterator in Object.__proto__" or "it[Symbol.iterator]" */
    return true;
  }
  return false;
};
exports.isIterable = isIterable;
var isSomeArray = function isSomeArray(x) {
  return isArray(x) && x.length > 0;
};
exports.isSomeArray = isSomeArray;
var isNamespace = function isNamespace(x) {
  return isSomeString(x) && /^[a-zA-Z]\w*(\.[a-zA-Z]\w*)*$/.test(x);
};
exports.isNamespace = isNamespace;
var isSubClassOf = function isSubClassOf(child, parent) {
  return child && isFunction(parent) && (child === parent || child.prototype instanceof parent);
};
exports.isSubClassOf = isSubClassOf;
var forEach = function forEach(x, callback) {
  var result;
  if (!isFunction(callback)) {
    throw "@locustjs/base: forEach: expected function for callback.";
  }
  if (!isEmpty(x)) {
    var _keys = Object.keys(x);
    for (var i = 0; i < _keys.length; i++) {
      var args = {
        source: x,
        index: i,
        key: _keys[i],
        value: x[_keys[i]],
        count: _keys.length
      };
      var r = callback(args);
      if (args["break"]) {
        result = r || args.result;
        break;
      }
    }
  }
  return result;
};
exports.forEach = forEach;
var equals = function equals(objA, objB) {
  var strict = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  if (isPrimitive(objA) || isEmpty(objA) || isFunction(objA)) {
    return strict ? objA === objB : objA == objB;
  }
  if (isArray(objA)) {
    if (isArray(objB) && objA.length == objB.length) {
      for (var i = 0; i < objA.length; i++) {
        if (!equals(objA[i], objB[i], strict)) {
          return false;
        }
      }
      return true;
    } else {
      return false;
    }
  }
  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);
  if (keysA.length != keysB.length) {
    return false;
  }
  for (var _i = 0, _keysA = keysA; _i < _keysA.length; _i++) {
    var key = _keysA[_i];
    if (!equals(objA[key], objB[key], strict)) {
      return false;
    }
  }
  return true;
};
exports.equals = equals;
var similars = function similars(objA, objB) {
  if (isPrimitive(objA)) {
    if (isPrimitive(objB)) {
      return _typeof(objA) == _typeof(objB);
    }
    return false;
  }
  if (isArray(objA)) {
    if (isArray(objB) && objA.length == objB.length) {
      for (var i = 0; i < objA.length; i++) {
        if (!similars(objA[i], objB[i])) {
          return false;
        }
      }
      return true;
    } else {
      return false;
    }
  }
  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);
  if (keysA.length != keysB.length) {
    return false;
  }
  for (var _i2 = 0, _keysA2 = keysA; _i2 < _keysA2.length; _i2++) {
    var key = _keysA2[_i2];
    if (!similars(objA[key], objB[key])) {
      return false;
    }
  }
  return true;
};
exports.similars = similars;

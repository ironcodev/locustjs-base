"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.equals = exports.Enum = exports.BaseEnum = exports.forEach = exports.isSubClassOf = exports.isNamespace = exports.isSomeArray = exports.isArray = exports.isFormatedDate = exports.hasBool = exports.hasDate = exports.isNumeric = exports.isFunction = exports.isSomeObject = exports.isObject = exports.isAnObject = exports.isSomeString = exports.isEmpty = exports.isPrimitive = exports.isaN = exports.isBool = exports.isDate = exports.isNumber = exports.isString = exports.NotImplementedException = void 0;

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return !!right[Symbol.hasInstance](left); } else { return left instanceof right; } }

var isString = function isString(x, n) {
  return (typeof x == 'string' || _instanceof(x, String)) && (n == undefined || x.length == n);
};

exports.isString = isString;

var isNumber = function isNumber(x) {
  return (typeof x == 'number' || _instanceof(x, Number)) && !isNaN(x);
};

exports.isNumber = isNumber;

var isDate = function isDate(x) {
  return _instanceof(x, Date) && !isNaN(x.valueOf());
};

exports.isDate = isDate;

var isBool = function isBool(x) {
  return typeof x == 'boolean' || _instanceof(x, Boolean);
};

exports.isBool = isBool;
var isaN = isNumber;
exports.isaN = isaN;

var isPrimitive = function isPrimitive(x) {
  return isString(x) || isNumber(x) || isDate(x) || isBool(x);
};

exports.isPrimitive = isPrimitive;

var isEmpty = function isEmpty(x) {
  return x == null || isString(x) && x.trim() == '';
};

exports.isEmpty = isEmpty;

var isSomeString = function isSomeString(x) {
  return isString(x) && x.trim() != '';
};

exports.isSomeString = isSomeString;

var isAnObject = function isAnObject(x) {
  return _typeof(x) == 'object' && x != null;
};

exports.isAnObject = isAnObject;

var isObject = function isObject(x) {
  return isAnObject(x) && !isPrimitive(x);
};

exports.isObject = isObject;

var isSomeObject = function isSomeObject(x) {
  return isObject(x) && Object.keys(x).length > 0;
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

var hasDate = function hasDate(x) {
  return (isDate(x) || isString(x) || isNumber(x)) && !isNaN(Date.parse(x));
};

exports.hasDate = hasDate;

var hasBool = function hasBool(x) {
  return isBool(x) || isSomeString(x) && ['true', 'false'].indexOf(x.toLowerCase()) >= 0;
};

exports.hasBool = hasBool;

var isFormatedDate = function isFormatedDate(x) {
  return isSomeString(x) && (/^\d{1,4}\.\d{1,4}\.\d{1,4}$/.test(x) || /^\d{1,4}-\d{1,4}-\d{1,4}$/.test(x) || /^\d{1,4}\/\d{1,4}\/\d{1,4}$/.test(x) || /^\d{1,4}\\\d{1,4}\\\d{1,4}$/.test(x));
};

exports.isFormatedDate = isFormatedDate;
var isArray = Array.isArray;
exports.isArray = isArray;

var isSomeArray = function isSomeArray(x) {
  return isArray(x) && x.length > 0;
};

exports.isSomeArray = isSomeArray;

var isNamespace = function isNamespace(x) {
  return isSomeString(x) && /^[a-zA-Z]\w*(\.[a-zA-Z]\w*)*$/.test(x);
};

exports.isNamespace = isNamespace;

var isSubClassOf = function isSubClassOf(child, parent) {
  return child && isFunction(parent) && (child === parent || _instanceof(child.prototype, parent));
};

exports.isSubClassOf = isSubClassOf;

var forEach = function forEach(x, callback) {
  var result;

  if (!isFunction(callback)) {
    throw "expected function for callback.";
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

      if (args.break) {
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

var BaseEnum = /*#__PURE__*/function () {
  function BaseEnum(values, name) {
    _classCallCheck(this, BaseEnum);

    this.name = name;

    if (isArray(values)) {
      for (var i; i < values.length; i++) {
        var value = values[i];

        if (isPrimitive(value)) {
          this[i] = value;
          this[value] = i;
        }
      }
    } else if (isSomeObject(values)) {
      for (var _i2 = 0, _Object$keys = Object.keys(values); _i2 < _Object$keys.length; _i2++) {
        var key = _Object$keys[_i2];
        var _value = values[key];

        if (isPrimitive(_value)) {
          this[key] = _value;
          this[_value] = key;
        }
      }
    }
  }

  _createClass(BaseEnum, [{
    key: "equals",
    value: function equals(value1, value2) {
      return Enum.equals(this, value1, value2);
    }
  }, {
    key: "getNames",
    value: function getNames() {
      var result = [];

      for (var _i3 = 0, _Object$keys2 = Object.keys(this); _i3 < _Object$keys2.length; _i3++) {
        var key = _Object$keys2[_i3];

        if (typeof key == 'string' && isPrimitive(this[key]) && !isNumeric(key) && key != 'name') {
          result.push(key);
        }
      }

      return result;
    }
  }, {
    key: "getValues",
    value: function getValues() {
      var result = [];

      for (var _i4 = 0, _Object$keys3 = Object.keys(this); _i4 < _Object$keys3.length; _i4++) {
        var key = _Object$keys3[_i4];

        if (typeof key == 'string' && isPrimitive(this[key]) && !isNumeric(key) && key != 'name') {
          result.push(this[key]);
        }
      }

      return result;
    }
  }, {
    key: "toArray",
    value: function toArray() {
      var result = [];

      for (var _i5 = 0, _Object$keys4 = Object.keys(this); _i5 < _Object$keys4.length; _i5++) {
        var key = _Object$keys4[_i5];

        if (typeof key == 'string' && isPrimitive(this[key]) && !isNumeric(key) && key != 'name') {
          result.push({
            name: key,
            value: this[key]
          });
        }
      }

      return result;
    }
  }, {
    key: "isValid",
    value: function isValid(value) {
      return !(value == null || this[value] == undefined);
    }
  }, {
    key: "getString",
    value: function getString(value, defaultValue) {
      if (!this.isValid(defaultValue)) {
        for (var _i6 = 0, _Object$keys5 = Object.keys(this); _i6 < _Object$keys5.length; _i6++) {
          var key = _Object$keys5[_i6];

          if (typeof key == 'string' && isPrimitive(this[key]) && !isNumeric(key) && key != 'name') {
            defaultValue = key;
            break;
          }
        }
      }

      var result = this.isValid(value) ? value : defaultValue ? defaultValue : undefined;

      if (result != undefined) {
        if (typeof result != 'string') {
          result = this[result];
        }
      }

      return result;
    }
  }, {
    key: "getNumber",
    value: function getNumber(value, defaultValue) {
      if (!this.isValid(defaultValue)) {
        for (var _i7 = 0, _Object$keys6 = Object.keys(this); _i7 < _Object$keys6.length; _i7++) {
          var key = _Object$keys6[_i7];

          if (typeof key == 'string' && isPrimitive(this[key]) && !isNumeric(key) && key != 'name') {
            defaultValue = key;
            break;
          }
        }
      }

      var result = this.isValid(value) ? value : defaultValue ? defaultValue : undefined;

      if (result != undefined) {
        if (!isNumber(result)) {
          result = this[result];
        }
      }

      return result;
    }
  }]);

  return BaseEnum;
}();

exports.BaseEnum = BaseEnum;
var Enum = {
  define: function define(values, name) {
    var result = Object.freeze(new BaseEnum(values, name));
    return result;
  },
  equals: function equals(enumType, value1, value2) {
    var result = false;

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
};
exports.Enum = Enum;

var NotImplementedException = function NotImplementedException(x) {
  return "".concat(x, " is not implemented");
};

exports.NotImplementedException = NotImplementedException;
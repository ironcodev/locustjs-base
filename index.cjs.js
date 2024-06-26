"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.query = exports.isjQueryElement = exports.isaN = exports.isUndefined = exports.isSubClassOf = exports.isString = exports.isSomething = exports.isSomeString = exports.isSomeObject = exports.isSomeNumber = exports.isSomeArray = exports.isPrimitive = exports.isObject = exports.isNumeric = exports.isNumber = exports.isNullOrEmpty = exports.isNull = exports.isNamespace = exports.isIterable = exports.isInteger = exports.isFunction = exports.isFormatedDate = exports.isFloat = exports.isEmpty = exports.isDate = exports.isBool = exports.isBasic = exports.isArray = exports.isAnObject = exports.hasDate = exports.hasBool = exports.forEach = exports.equals = exports.convert = exports.Convert = exports.ConversionDefault = exports.ConversionBase = void 0;
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
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
  return x === null;
};
exports.isNull = isNull;
var isUndefined = function isUndefined(x) {
  return x === undefined;
};
exports.isUndefined = isUndefined;
var isNullOrEmpty = function isNullOrEmpty(x) {
  return isNull(x) || isUndefined(x) || typeof x == 'number' && isNaN(x) || isString(x) && x.length == 0;
};
exports.isNullOrEmpty = isNullOrEmpty;
var isEmpty = function isEmpty(x) {
  return isNull(x) || isUndefined(x) || typeof x == 'number' && isNaN(x) || isString(x) && x.trim() == '';
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
  return !isNull(x) && !isUndefined(x) && !(typeof x == 'number' && isNaN(x));
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
var isInteger = Number.isInteger;
exports.isInteger = isInteger;
var isFloat = function isFloat(x) {
  return isNumeric(x) && Math.floor(x) - x != 0;
};
exports.isFloat = isFloat;
var isSomeNumber = function isSomeNumber(x) {
  return isNumeric(x) && x != 0;
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
  var ignoreCase = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  return isBool(x) || isSomeString(x) && ['true', 'false'].indexOf(ignoreCase ? x.trim().toLowerCase() : x.trim()) >= 0;
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
  var result = [];
  if (isUndefined(callback)) {
    callback = function callback() {};
  }
  if (!isFunction(callback)) {
    throw "@locustjs/base: forEach: expected function for callback.";
  }
  if (!isEmpty(x)) {
    if (isArray(x)) {
      for (var i = 0; i < x.length; i++) {
        var args = {
          source: x,
          index: i,
          key: i,
          value: x[i],
          count: x.length
        };
        var r = callback(args);
        if (args["break"]) {
          break;
        }
        if (!args.skip) {
          result.push(r || args.result || {
            index: i,
            key: i,
            value: x[i]
          });
        }
      }
    } else if (isObject(x)) {
      var _keys = Object.keys(x);
      for (var _i = 0; _i < _keys.length; _i++) {
        var _args = {
          source: x,
          index: _i,
          key: _keys[_i],
          value: x[_keys[_i]],
          count: _keys.length
        };
        var _r = callback(_args);
        if (_args["break"]) {
          break;
        }
        if (!_args.skip) {
          result.push(_r || _args.result || {
            index: _i,
            key: _keys[_i],
            value: x[_i]
          });
        }
      }
    }
  }
  return result;
};
exports.forEach = forEach;
var equals = function equals(objA, objB) {
  var strict = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  if (isPrimitive(objA) || isNullOrEmpty(objA) || isFunction(objA)) {
    return strict ? objA === objB : objA == objB;
  }
  if (isPrimitive(objB) || isNullOrEmpty(objB) || isFunction(objB)) {
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
  for (var _i2 = 0, _keysA = keysA; _i2 < _keysA.length; _i2++) {
    var key = _keysA[_i2];
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
  for (var _i3 = 0, _keysA2 = keysA; _i3 < _keysA2.length; _i3++) {
    var key = _keysA2[_i3];
    if (!similars(objA[key], objB[key])) {
      return false;
    }
  }
  return true;
};
var query = function query(obj, path) {
  if ((isSomeObject(obj) || isSomeArray(obj)) && isSomeString(path)) {
    var arr = path.split('.');
    var cur = obj;
    var _iterator = _createForOfIteratorHelper(arr),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var prop = _step.value;
        if (cur == undefined) {
          break;
        }
        var openBracketIndex = prop.indexOf('[');
        var index = void 0;
        var propName = void 0;
        if (openBracketIndex >= 0) {
          var closeBracketIndex = prop.indexOf(']', openBracketIndex);
          if (closeBracketIndex > 0) {
            index = prop.substr(openBracketIndex + 1, closeBracketIndex - openBracketIndex - 1);
            if (isNumeric(index)) {
              index = parseInt(index);
              propName = prop.substr(0, openBracketIndex);
            }
          }
        } else {
          propName = prop;
        }
        if (propName) {
          cur = cur[propName];
          if (isArray(cur) && isNumber(index) && index >= 0 && index < cur.length) {
            cur = cur[index];
          }
        } else {
          if (isArray(cur) && isNumber(index) && index >= 0 && index < cur.length) {
            cur = cur[index];
          } else {
            break;
          }
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return cur;
  }
};
exports.query = query;
var ConversionBase = /*#__PURE__*/function () {
  function ConversionBase() {
    _classCallCheck(this, ConversionBase);
  }
  _createClass(ConversionBase, [{
    key: "_name",
    get: function get() {
      return this.constructor.name;
    }
  }, {
    key: "toBool",
    value: function toBool(x) {
      throw "".concat(this.name, ".toBool() is not implemented");
    }
  }, {
    key: "toNumber",
    value: function toNumber(x) {
      throw "".concat(this.name, ".toNumber() is not implemented");
    }
  }, {
    key: "toDate",
    value: function toDate(x) {
      throw "".concat(this.name, ".toDate() is not implemented");
    }
  }, {
    key: "toString",
    value: function toString(x) {
      throw "".concat(this.name, ".toString() is not implemented");
    }
  }]);
  return ConversionBase;
}();
exports.ConversionBase = ConversionBase;
var ConversionDefault = /*#__PURE__*/function (_ConversionBase) {
  _inherits(ConversionDefault, _ConversionBase);
  var _super = _createSuper(ConversionDefault);
  function ConversionDefault() {
    _classCallCheck(this, ConversionDefault);
    return _super.apply(this, arguments);
  }
  _createClass(ConversionDefault, [{
    key: "toBool",
    value: function toBool(x) {
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
  }, {
    key: "toNumber",
    value: function toNumber(x) {
      if (isNumeric(x)) {
        return new Number(x);
      }
      return 0;
    }
  }, {
    key: "toDate",
    value: function toDate(x) {
      var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Date();
      if (isDate(x)) {
        return x;
      }
      if (isFormatedDate(x)) {
        return new Date(x);
      }
      if (isNumeric(x)) {
        return new Date(x);
      }
      if (hasDate(x)) {
        return new Date(Date.parse(x));
      }
      return defaultValue;
    }
  }, {
    key: "toString",
    value: function toString(x) {
      if (isNullOrEmpty(x)) {
        return '';
      }
      return x.toString();
    }
  }]);
  return ConversionDefault;
}(ConversionBase);
exports.ConversionDefault = ConversionDefault;
var convert = new ConversionDefault();
exports.convert = convert;
var Convert = /*#__PURE__*/function () {
  function Convert() {
    _classCallCheck(this, Convert);
  }
  _createClass(Convert, null, [{
    key: "instance",
    get: function get() {
      return convert;
    },
    set: function set(x) {
      if (!(x instanceof ConversionBase)) {
        throw "input type must be a subclass of ConversionBase";
      }
      exports.convert = convert = x;
    }
  }, {
    key: "toBool",
    value: function toBool(x) {
      return convert.toBool(x);
    }
  }, {
    key: "toNumber",
    value: function toNumber(x) {
      return convert.toNumber(x);
    }
  }, {
    key: "toDate",
    value: function toDate(x) {
      return convert.toDate(x);
    }
  }, {
    key: "toString",
    value: function toString(x) {
      return convert.toString(x);
    }
  }]);
  return Convert;
}();
exports.Convert = Convert;

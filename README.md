# @locustjs/base
This library contains type checking functions and a few general utilities.

# Install
```
npm i @locustjs/base
```

## Current Version
```
4.5.1
```

# Import

CommonJs
```javascript
var someFn = require('@locustjs/base').someFn;
var { someFn } = require('@locustjs/base');
```

ES6
```javascript
import { someFn } from '@locustjs/base'
```

# Functions
| function | description |
|------|--------|
| `isString(arg: any, n: int)` |returns `true` if `arg` is `string`, otherwise returns `false`. if `n` is provider, returns `true` when `arg` is a `string` whose length is `n`. |
| `isNumber(arg: any)` | returns `true` if `arg` is `number`, otherwise returns `false`|
|`isDate(arg: any)`|returns `true` if `arg` is `date`, otherwise returns `false`|
| `isBool(arg: any)`|returns `true` if `arg` is `boolean`, otherwise returns `false`|
| `isaN(arg: any)` |returns `true` if `arg` is a `number`, otherwise returns `false`|
| `isBasic(arg: any)` | returns `true` if `arg` is basic data type (`number`, `boolean`, `string`, `date`), otherwise returns `false`. Instances of `String`, `Number`, `Boolean` and `Date` are not assumed `Basic`. |
| `isPrimitive(arg: any)` | it is similar to `isBasic`. It also accepts `Number`, `String`, `Boolean` and `Date`. |
| `isNull(arg: any)` | returns `true` if `arg` is `null`, otherwise returns `false` |
| `isUndefined(arg: any)` | returns `true` if `arg` is `undefined`, otherwise returns `false` |
| `isNullOrUndefined(arg: any)` | returns `true` if `arg` is `null` or `undefined`, otherwise returns `false` |
| `isEmpty(arg: any, includeAllWhitespaces = true)` | returns `true` if `arg` is empty (`null`, `undefined` or empty string), otherwise returns `false`. It also returns `true` for whitespace-only string, unless `includeAllWhitespaces` is passed as `false`. |
| `isSomeString(arg: any, trimWhitespaces = true)` | returns `true` if `arg` is a non-zero length `string`, otherwise returns `false`. It returns `false` on whitespace-only strings, unless `trimWhitespaces` is passed as `false`. |
| `isNullOrEmpty(arg: any)` | returns `true` if `arg` is `null`, `undefined` or empty strings, otherwise returns `false` (it equals `isEmpty(arg, false)`). |
| `isAnObject(arg: any)` | returns `true` if `arg` non-null `object`. Instances of `String`, `Number`, `Boolean` or `Date` and `Array`s are assumed an `object`. |
| `isObject(arg: any)` | returns `true` if only and only `arg` is really an `object`. Instances of `String`, `Number`, `Boolean` 
or `Date` and `Array`s are not assumed object. |
| `isObjectish(arg: any)` | Acts like `isAnObject` (it is another name for `isAnObject`). |
| `isSomething(arg: any)` | returns `true` if `arg` is something valuable, i.e. it is not `null`, `undefined` or `NaN`, otherwise returns `false` |
| `isNothing(arg: any)` | returns `true` if `arg` could not be assume something valuable. `null`, `undefined`, `NaN`, empty strings and empty objects are all assumed nothing. |
| `isFunction(arg: any)` | returns `true` if `arg` is `function`, otherwise returns `false` |
| `isNumeric(arg: any)` | returns `true` if `arg` is `number` or a string containing a `number`, otherwise returns `false` |
| `isInteger(arg: any)` | returns `true` if `arg` is an integer number, otherwise returns `false` (it behaves as `Number.isInteger()`) |
| `isFloat(arg: any)` | returns `true` if `arg` is a floating-point number, otherwise returns `false` |
| `isjQueryElement(arg: any)` | returns `true` if `arg` is a `jQuery` element, otherwise returns `false` |
| `hasDate(arg: any)` | returns `true` if `arg` is a `string` containing a date value, otherwise returns `false` |
| `hasBool(arg: any, options)` | returns `true` if `arg` is a `boolean` value or a string whose trimmed value is `true` or `false`, otherwise returns `false`. It also returns `true` on `True`, `False`, `TRUE`, `FALSE` string values. This behavior can be customized through `options` argument. This is explained furthur. |
| `isFormatedDate(arg: any)` | returns `true` if `arg` is a string containing a date value in `yyyy-MM-dd`, `yyyy/MM/dd`, `yyyy.MM.dd` or `yyyy\MM\dd` format, otherwise returns `false` |
| `isArray(arg: any)` | returns `true` if `arg` is an array, otherwise returns `false` |
| `isIterable(arg: any)` | returns `true` if `arg` is iterable (can be iterated), otherwise returns `false` |
| `isSomeObject(arg: any)` | returns `true` if `arg` is an object with at least one key, otherwise returns `false` |
| `isSomeNumber(arg: any)` | returns `true` if `arg` is non-zero number or numeric string, otherwise returns `false` |
| `isSomeArray(arg: any)` | returns `true` if `arg` is a non-empty array , otherwise returns `false` |
| `isNamespace(arg: any)` | returns `true` if `arg` is a namespace string, i.e. an string starting with a letter and containing only letter/digit, dot or underscore, otherwise returns `false` |
| `isRegex(x: any)` | returns `true` if `arg` is a regular-expression (an instance of `RegExp`). |
| `isSubClassOf(childClass, parentClass)` | returns `true` if `childClass` is sub-class of `parentClass`, otherwise returns `false`. |
| `foreach(x, callback)` or `forEach(x, callback)` | iterates over an array, an object or an iterable list, invokes `callback` on each iteration, passing it current value and other information. At the end, it returns an array containing the result of invokations of the `callback`. |
| `query(object, path)` | queries over `object` based on the given `path` in string (explained furthur). |
| `set(object, path, value)` | sets value of the given `path` in the given `object` (explained furthur). |
| `equals(a, b, strict = false)` | checks whether the two arguments are equal in loose mode or strict mode based on the boolean `strict` argument. |

# Examples
## `isString(x: any, n: int): boolean`

```javascript
isString(1)                 // false
isString(null)              // false
isString(undefined)         // false
isString(NaN)               // false
isString({})                // false
isString(``)                // true
isString('')                // true
isString("")                // true
isString('abc')             // true
isString(new String())      // true
isString(new String('123')) // true
isString('abc', 2)          // true
isString('abc', 5)          // false
```

## `isNumber(x: any): boolean`, `isaN(x: any): boolean`

```javascript
isNumber(1)                 // true
isNumber(`1`)               // false
isNumber(1.01)              // true
isNumber('1.01')            // false
isNumber("0.25")            // false
isNumber('')                // false
isNumber(null)              // false
isNumber(undefined)         // false
isNumber(NaN)               // false
isNumber({})                // false
isNumber(new String())      // false
isNumber(new Number())      // true
isNumber(new Number(123))   // true
```

## `isNumeric(x: any): boolean`

```javascript
isNumeric(1)                 // true
isNumeric(`1`)               // true
isNumeric(1.01)              // true
isNumeric('1.01')            // true
isNumeric("0.25")            // true
isNumeric('')                // false
isNumeric(null)              // false
isNumeric(undefined)         // false
isNumeric(NaN)               // false
isNumeric({})                // false
isNumeric(new String())      // false
isNumeric(new Number())      // true
isNumeric(new Number(123))   // true
```

## `isInteger(x: any): boolean`

```javascript
isInteger(1)                 // true
isInteger(`1`)               // false
isInteger(1.01)              // false
isInteger('1.01')            // false
isInteger("0.25")            // false
isInteger('')                // false
isInteger(null)              // false
isInteger(undefined)         // false
isInteger(NaN)               // false
isInteger({})                // false
isInteger(new String())      // false
isInteger(new Number())      // true
isInteger(new Number(123))   // true
isInteger(new Number(12.34)) // false
```

## `isFloat(x: any): boolean`

```javascript
isFloat(1)                 // true
isFloat(`1`)               // false
isFloat(1.01)              // true
isFloat('1.01')            // false
isFloat("0.25")            // false
isFloat('')                // false
isFloat(null)              // false
isFloat(undefined)         // false
isFloat(NaN)               // false
isFloat({})                // false
isFloat(new String())      // false
isFloat(new Number())      // false
isFloat(new Number(123))   // false
isFloat(new Number(12.34)) // true
```

## `isDate(x: any): boolean`

```javascript
isDate('')                      // false
isDate(null)                    // false
isDate(undefined)               // false
isDate({})                      // false
isDate('2024')                  // false
isDate('2024-04-21')            // false
isDate('2024/04/21')            // false
isDate(new Date())              // true
isDate(new Date(2024, 10, 21))  // true
```

## `isBool(x: any): boolean`

```javascript
isBool('')                  // false
isBool(null)                // false
isBool(undefined)           // false
isBool({})                  // false
isBool('true')              // false
isBool("false")             // false
isBool(true)                // true
isBool(new Boolean())       // true
isBool(new Boolean(false))   // true
```

## `isBasic(x: any): boolean`

```javascript
isBasic('')                     // true
isBasic(null)                   // false
isBasic(undefined)              // false
isBasic(NaN)                    // false
isBasic('23')                   // true
isBasic({})                     // false
isBasic(true)                   // true
isBasic(new String('123'))      // false
isBasic(new Boolean(false))     // false
isBasic(new Number(123))        // false
isBasic(new Date(1998, 5, 14))  // false
```

## `isPrimitive(x: any): boolean`

```javascript
isPrimitive('')                     // true
isPrimitive(null)                   // false
isPrimitive(undefined)              // false
isPrimitive(NaN)                    // false
isPrimitive('23')                   // true
isPrimitive({})                     // false
isPrimitive(true)                   // true
isPrimitive(new String('123'))      // true
isPrimitive(new Boolean(false))     // true
isPrimitive(new Number(123))        // true
isPrimitive(new Date(1998, 5, 14))  // true
```

> The difference between `isBasic` and `isPrimitive` is that, `isBasic` does not return `true` on instances of `String`, `Number`, `Boolean` and `Date`, while `isPrimitive` does.


## `isNull(x: any): boolean`
Returns `true` only when `x` is exactly `null`.

```javascript
isNull('')          // false
isNull(null)        // true
isNull(undefined)   // false
isNull(NaN)         // false
isNull({})          // false
```

## `isUndefined(x: any): boolean`
Returns `true` only when `x` is exactly `undefined`.

```javascript
isUndefined('')          // false
isUndefined(null)        // false
isUndefined(undefined)   // true
isUndefined(NaN)         // false
isUndefined({})          // false
```

## `isNullOrUndefined(x: any): boolean`
Returns `true` when `x` is `null` or `undefined`.

```javascript
isNullOrUndefined('')          // false
isNullOrUndefined('   ')       // false
isNullOrUndefined(null)        // true
isNullOrUndefined(undefined)   // true
isNullOrUndefined(NaN)         // false
isNullOrUndefined({})          // false
```

## `isEmpty(x: any, includeAllWhitespaces = true): boolean`
Returns `true` when `x` is `null`, `undefined`, zero-length string or a string that is only includes whitespace characters.

```javascript
isEmpty('')             // true
isEmpty('   ')          // true
isEmpty('   ', false)   // false
isEmpty(null)           // true
isEmpty(undefined)      // true
isEmpty(NaN)            // true
isEmpty({})             // false
```

## `isNullOrEmpty(x: any): boolean`
Returns `true` when `x` is `null`, `undefined`, zero-length string.

```javascript
isNullOrEmpty('')          // true
isNullOrEmpty('   ')       // false
isNullOrEmpty(null)        // true
isNullOrEmpty(undefined)   // true
isNullOrEmpty(NaN)         // true
isNullOrEmpty({})          // false
```

> The difference between `isEmpty` and `isNullOrEmpty` is that, `isEmpty` by default returns `true` on whitespace-only strings, while `isNullOrEmpty` does not.

## `isAnObject(x: any): boolean`
Returns `true` when type of `x` is `object` and `x` is not `null`.

```javascript
isAnObject(23)              // false
isAnObject('')              // false
isAnObject(null)            // false
isAnObject(undefined)       // false
isAnObject(NaN)             // false
isAnObject({})              // true
isAnObject(new String())    // true
isAnObject(new Number(5))   // true
isAnObject(new Date())      // true
isAnObject([])              // true
isAnObject([10, 20, 30])    // true
```

> `isObjectish` is another name for `isAnObject`, meaning `x` can be assumed an `object`.

## `isObject(x: any): boolean`
Returns `true` only when `x` is really an `object`. Arrays and instances of `String`, `Number`, `Boolean` and `Date` are not assumed an `object`.

```javascript
isObject(23)                // false
isObject('')                // false
isObject(null)              // false
isObject(undefined)         // false
isObject(NaN)               // false
isObject({})                // true
isObject(new String())      // false
isObject(new Number(5))     // false
isObject(/\d+/)             // true
isObject(new RegExp('\d+')  // true
isObject([])                // false
isObject([10, 20, 30])      // false
```

> `isObject` is a safe method that returns `true` only on real objects. Although, type of arrays and instances of `String`, `Number` and `Boolean` is `object`, `isObject()` does not return `true` on them. This decision is made so that we can explicitly differ between `Objects`, primitve data types and `Arrays`.

## `isSomeString(x: any, trimWhitespaces = true): boolean`
Returns `true` when `x` is a non-zero length `string` or `String`. By default it assumes whitespace-only strings as not to be some-string. Passing `false` on `trimWhitespaces` parameter negates this assumption.

```javascript
isSomeString(1)                         // false
isSomeString(null)                      // false
isSomeString(undefined)                 // false
isSomeString(NaN)                       // false
isSomeString({})                        // false
isSomeString({ a: 23 })                 // false
isSomeString('')                        // false
isSomeString('  ')                      // false
isSomeString('  ', false)               // true
isSomeString('abc')                     // true
isSomeString(new String())              // false
isSomeString(new String('  '))          // false
isSomeString(new String('  '), true)    // true
isSomeString(new String('123'))         // true
```

## `isSomeNumber(x: any): boolean`
Returns `true` when `x` is a non-zero `number` or `Number`.

```javascript
isSomeNumber(1)                 // true
isSomeNumber(0)                 // false
isSomeNumber(`1`)               // false
isSomeNumber(1.01)              // true
isSomeNumber('1.01')            // false
isSomeNumber("0.25")            // false
isSomeNumber('')                // false
isSomeNumber(null)              // false
isSomeNumber(undefined)         // false
isSomeNumber(NaN)               // false
isSomeNumber({})                // false
isSomeNumber(new String())      // false
isSomeNumber(new Number())      // false
isSomeNumber(new Number(123))   // true
isSomeNumber(new Number(12.34)) // true
```

## `isSomeObject(x: any): boolean`
Returns `true` when `x` is an `object` with at least one `property`.

```javascript
isSomeObject('')              // false
isSomeObject(null)            // false
isSomeObject(undefined)       // false
isSomeObject(NaN)             // false
isSomeObject({})              // false
isSomeObject(new String())    // false
isSomeObject(new Number(5))   // false
isSomeObject([])              // false
isSomeObject([10, 20, 30])    // false
isSomeObject({ a: 10 })       // true
```

## `isSomeArray(x: any): boolean`
Returns `true` when `x` is a non-zero length array.

```javascript
isSomeArray('')              // false
isSomeArray(null)            // false
isSomeArray(undefined)       // false
isSomeArray(NaN)             // false
isSomeArray({})              // false
isSomeArray(new String())    // false
isSomeArray(new Number(5))   // false
isSomeArray([])              // false
isSomeArray([10, 20, 30])    // true
isSomeArray({ a: 10 })       // false
```

## `isSomething(x: any): boolean`
Returns `true` when `x` is not `null`, `undefined` or `NaN`.

```javascript
isSomething('')              // true
isSomething(null)            // false
isSomething(undefined)       // false
isSomething(NaN)             // false
isSomething({})              // true
isSomething(new String())    // true
isSomething(new Number(5))   // true
```

## `isNothing(x: any): boolean`
Returns `true` when `x` is `null`, `undefined`, `NaN`, zero number, zero-length string, empty array (`[]`) or empty object (`{}`).

```javascript
isNothing('')              // true
isNothing(0)               // true
isNothing(new Number(0))   // true
isNothing('0')             // true
isNothing('  0  ')         // false
isNothing(null)            // true
isNothing(undefined)       // true
isNothing(NaN)             // true
isNothing([])              // true
isNothing({})              // true
isNothing(new String())    // true
isNothing('  ')            // false
isNothing(new Number(5))   // true
```

## `isFunction(x: any): boolean`
Returns `true` when `x` is a function.

```javascript
isFunction('')                          // false
isFunction(null)                        // false
isFunction(undefined)                   // false
isFunction(NaN)                         // false
isFunction({})                          // false
isFunction(new String())                // false
isFunction(new Number(5))               // false
isFunction([])                          // false
isFunction([10, 20, 30])                // false
isFunction({ a: 10 })                   // false
isFunction(() => ())                    // true
isFunction((x) => x)                    // true
isFunction(() => {})                    // true
isFunction(() => { return 10 })         // true
isFunction(function () {})              // true
isFunction(function () { return 10 })   // true
isFunction(new Function('return "a"'))  // true
```

## `hasDate(x: any): boolean`
Returns `true` when `x` contains a `date` object or a string in the form of `date`. Numbers are also assumed as dates.

```javascript
hasDate('')                     // false
hasDate(null)                   // false
hasDate(undefined)              // false
hasDate(NaN)                    // false
hasDate(new Date())             // true
hasDate(new Date(2024, 10, 5))  // true
hasDate('')                     // false
hasDate('2024')                 // true
hasDate('2024-05-06')           // true
hasDate(new String(''))         // false
hasDate(new String('1'))        // true
hasDate(5)                      // true
hasDate(new Number(5))          // true
```

## `hasBool(x: any, options): boolean`
Returns `true` when `x` is a `boolean` value or a string whose trimmed value is `true` or `false`.

```javascript
hasBool('')                     // false
hasBool(null)                   // false
hasBool(undefined)              // false
hasBool(NaN)                    // false
hasBool(5)                      // false
hasBool(new Number(5))          // false
hasBool({})                     // false
hasBool({ a: 10 })              // false
hasBool(new Boolean())          // true
hasBool(new Boolean(false))     // true
hasBool('')                     // false
hasBool('true')                 // true
hasBool('false')                // true
hasBool('  true    ')           // true
hasBool('   false')             // true
hasBool(new String('true'))     // true
hasBool(new String('  false'))  // true
```

`hasBool` also returns `true` on strings whose trimmed value is pascal-case and uppercase of `true` and `false`, i.e. `True`, `False`, `TRUE` or `FALSE`.

```javascript
hasBool('True')                 // true
hasBool('FALSE')                // true
hasBool('   FALSE ')            // true
hasBool(new String('TRUE   '))  // true
hasBool(new String('  True'))   // true
hasBool(new String('FALSE'))    // true
hasBool('TRue')                 // false
```

This behavior can be customized through the second `options` argument. The `options` argument can have the following structure:

```javascript
{
    pascal: true | false,   // accept `True`, `False` as bool or not (default is true)
    upper: true | false,    // accept `TRUE`, `FALSE` as bool or not (default is true)
    trim: true | false  // trim strings (default is true)
}
```

```javascript
hasBool('  true ', { trim: false })  // false
hasBool('True', { pascal: false })  // false
hasBool('FALSE', { upper: false })  // false
```

It is possible to pass a string as `options`. If the string contains each of `p`, `u` or `t` letters, `hasBool` assumes pascale-case, uppercase and trimming options as `true` respectively.

```javascript
// enable pascalcase and trimming
hasBool('  true ', 'pt')  // true
hasBool('False', 'pt')  // true
hasBool('TRUE', 'pt')  // false

// enable trimming only
hasBool('  true ', 't') // true
hasBool('True', 't')  // false
hasBool('FALSE', 't')  // false

// enable nothing
hasBool('true', '') // true
hasBool('false', '') // true
hasBool('  true ', '') // false
hasBool('false   ', '') // false
hasBool('True', '')  // false
hasBool('FALSE', '')  // false
```

## `isNamespace(x: any): boolean`

```javascript
isNamespace(null)       // false
isNamespace('')         // false
isNamespace('_')        // false
isNamespace('a')        // true
isNamespace(' a')       // false
isNamespace('_a')       // false
isNamespace('a_')       // true
isNamespace('a1')       // true
isNamespace('1')        // false
isNamespace('1a')       // false
isNamespace('a.')       // false
isNamespace('a.b')      // true
isNamespace('a.b.')     // false
isNamespace('a.b.c1')   // true
```

## `isSubClassOf(ChildClass, ParentClass)`
Checks whether `ChildClass` is a subclass of `ParentClass`.

```javascript
class Foo {}
class Bar extends Foo {}
class Baz {}

isSubClassOf(Bar, Foo)  // true
isSubClassOf(Baz, Foo)  // false
```

## `forEach(x: any, callback: function): array`
This function iterates over `x` and calls `callback` on each iteration. `x` could be an `array` or an object. If `x` is object, `forEach` iterates over its properties. At the end, it returns an array of `callback`'s return value.

The `callback` function has a single parameter with the following structure:

```javascript
{
    source: any,            // main object
    index: number,          // iteration number
    key: string | number    // in objects: current prop name; in arrays:, current index
    value: any,             // current value
    count: number           // in objects: number of props; in arrays: array length
}
```

Example 1: iterate an object
```javascript
const obj = { name: 'ali', age: 23, sex: true }

forEach(obj, ({ index, key, value }) => console.log(`${index}: ${key} = ${value}`))
/*
0: name = ali
1: age = 23
2: sex = true
*/
```

Example 2: iterate an array
```javascript
const obj = [10, 'ali', true, new Date(2024, 10, 12)]

forEach(obj, ({ key, value }) => console.log(`${key} = ${value}`))
/*
0 = 10
1 = ali
2 = true
3 = 2024-10-12 15:47:35
*/
```

Example 3: more practical exmaple:
```javascript
const obj = { name: 'ali', age: 23, sex: true }

const values = forEach(obj).map(x => x.value)

console.log(values)     // [ 'ali', 23, true ]

const querystring = forEach(obj).map(x => `${x.key}=${encodeURI(x.value)}`).join('&')

console.log(querystring)     // name=ali&age=23&sex=true
```

`forEach()` also provides breaking feature. In order to break the loop, we should set `break` to `true` in the argument passed to `callback`.

Example: break iteration
```javascript
const obj = {
    name: 'ali',
    age: 23,
    sex: true,
    city: 'tehran',
    phone: '22334455'
}

const list = forEach(obj, (args) => {
    if (args.key == 'city') {
        args.break = true
    }
})

console.log(list)
/*
[
    { key: 'name', value: 'ali' },
    { key: 'age', value: 23 },
    { key: 'sex', value: 'true' }
]
*/
```

Finally, `forEach` provides skipping over some items by setting `skip` to true on the argment passed to callback.

```javascript
const obj = {
    name: 'ali',
    age: 23,
    sex: true,
    city: '',
    phone: '22334455',
    zip: '   '
}

const querystring = forEach(obj, (args) => {
    args.skip = isEmpty(args.value)
}).map(x => `${x.key}=${encodeURI(x.value)}`).join('&')

console.log(querystring)     // name=ali&age=23&sex=true&phone=22334455
```

## `equals(a: any, b: any, strict: boolean): boolean`
This function checks whether `a` and `b` are equal or not. Comparison can be done `strict` or `loose`.

```javascript
// loose comparison: strict = false
equals(null, null) // true
equals(null, undefined) // true
equals(1, 1) // true
equals(1, '1') // true
equals({}, {}) // true
equals({ a: 10 }, { a: 10 }) // true
equals({ a: 10 }, { a: '10' }) // true
equals({ a: 10, b: 'test' }, { a: '10', b: 'test' }) // true
equals([], []) // true
equals([10, 20], [10, 20]) // true
equals([10, '20'], ['10', 20]) // true
equals({ a: 10, b: [20, 30] }, { a: 10, b: [20, 30] }) // true
equals({ a: 10, b: [20, '30'] }, { a: 10, b: ['20', 30] }) // true
equals({ a: 10, b: [20, {c: 30}] }, { a: 10, b: ['20', {c: 30}] }) // true
equals({ a: 10, b: [20, {c: 30}] }, { a: 10, b: ['20', {c: '30'}] }) // true

// strict comparison: strict = true
equals(null, null, true) // true
equals(null, undefined, true) // false
equals(1, 1, true) // true
equals(1, '1', true) // false
equals({}, {}, true) // true
equals({ a: 10 }, { a: 10 }, true) // true
equals({ a: 10 }, { a: '10' }, true) // false
equals({ a: 10, b: 'test' }, { a: '10', b: 'test' }, true) // false
equals([], [], true) // true
equals([10, 20], [10, 20], true) // true
equals([10, '20'], ['10', 20], true) // false
equals({ a: 10, b: [20, 30] }, { a: 10, b: [20, 30] }, true) // true
equals({ a: 10, b: [20, '30'] }, { a: 10, b: ['20', 30] }, true) // false
equals({ a: 10, b: [20, {c: 30}] }, { a: 10, b: ['20', {c: 30}] }, true) // false
equals({ a: 10, b: [20, {c: 30}] }, { a: 10, b: ['20', {c: '30'}] }, true) // false

```

## `query(obj: any, path: string): any`
This function reads a value from an object based on the given `path`.

```javascript
const obj = {
    name: 'ali',
    address: {
        id: 123,
        city: {
            name: 'tehran',
            phone: '22334455'
        }
    },
    marks: [19.5, 18.25, 15],
    locations: [
        { x: 34.5, y: 32.26, name: 'home' },
        { x: 20.1, y: 30.78, name: 'work' },
        { x: 18.7, y: 29.01, name: 'parents' },
    ],
    points: {
        likes: [
            {
                source: {
                    page: {
                        id: 8001,
                        tags: ['earth', 'mars', 'venus']
                    }
                }
            }
        ]
    },
    data: [
        [
            ['code', '1234'],
            ['active', true],
        ],
        [100, 101, 102, 103],
        [
            [
                { page: 324, from: 200, to: 300 }
            ],
            {
                form: 'frm-filter',
                checks: [11, 15, 8]
            }
        ]
    ]
}

query(obj, 'name')    // ali
query(obj, 'address.id')    // 123
query(obj, 'address.city.name')    // tehran
query(obj, 'marks[2]')    // 15
query(obj, 'locations[1].name')    // work
query(obj, 'points.likes[0].source.page.tags[1]')    // mars
query(obj, 'data[0][1][0]')    // active
query(obj, 'data[1][12]')    // undefined
query(obj, 'data[1][2]')    // 102
query(obj, 'data[2][0][0].page')    // 324
query(obj, 'data[2][1].checks[1]')    // 15
```

## `set(obj: any, path: string, value: any): object`
This function sets a value on an object based on a given `path`. The source object is affected.

```javascript
let obj = { }

set(obj, 'a', 10)    // { a: 10 }
set(obj, 'a.b', true)    // { a: { b: true } }
set(obj, 'a[1]', 'ali')    // { a: [null, 'ali'] }
set(obj, 'a[1][2]', 'ali')    // { a: [null, [null, null, 'ali']] }
set(obj, 'a[1][2].name', 'ali')    // { a: [null, [null, null, { name: 'ali' }]] }
set(obj, 'a[1][2].name.fn', 'ali')    // { a: [null, [null, null, { name: { fn: 'ali' } }]] }
set(obj, 'a[1].name', 'ali')    // { a: [null, { name: 'ali' }] }
set(obj, 'a[1].name[0]', 'ali')    // { a: [null, { name: ['ali'] }] }

obj = [];

set(obj, '[1]', 'ali')    // [null, 'ali']
set(obj, '[1][2]', 'ali')    // [null, [null, null, 'ali']]
set(obj, '[1].name', 'ali')    // [null, { name: 'ali' }]
```

## `ConversionBase`
This is an abstract base class that defines structure of conversion classes.

### Methods

| method | description |
|--------|-------------|
| `toBool(x: any): boolean` | converts `x` to a `boolean` value if possible. if not, returns `false` |
| `toNumber(x: any): number` | converts `x` to a `number` if possible. if not, returns zero |
| `toDate(x: any, default = new Date()): date` | converts `x` to a `Date` object if possible. if not, returns `default` (current date by default) |

## `ConversionDefault`
This is the default implementation of `ConversionBase`.

## `Convert`
This is a static helper class with static methods similar to `ConversionBase` class.

```javascript
Convert.toBool('true')      // true
Convert.toBool('True')      // true
Convert.toNumber('23.5')    // 23.5
```

By default, `Convert` uses an instance of `ConversionDefault` to do conversions. However, it has a static property named `instance` through which we can set another subclass of `ConversionBase` for conversion.

```javascript
class MyConversion extends ConversionBase { 
    toBool(x) {
        return x == 'true'
    }
}

Convert.instance = new MyConversion()

Convert.toBool('True')  // false
```

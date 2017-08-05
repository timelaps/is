module.exports = isEqual;
var CONSTRUCTOR = 'constructor';
var toString = {}.toString;
var is0 = require('../0');
var isInstance = require('../instance');
var isNil = require('../nil');
var isObject = require('../object');
var is0 = require('../0');
var createToStringResult = require('@timelaps/hacks/to-string-result');
var toNumber = require('@timelaps/hacks/to-number');
var objectToString = require('@timelaps/hacks/call-to-string');

function has(object, key) {
    return object && object.hasOwnProperty(key);
}

function keys(obj) {
    return Object.keys(obj);
}

function isEqual(a, b, aStack_, bStack_) {
    // Internal recursive comparison function for `isEqual`
    var aStack, bStack, className, areArrays, aCtor, bCtor, length, objKeys, key, aNumber, bNumber;
    // Identical objects are equal. `0 === -0`, but they aren't identical.
    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
    if (a === b) {
        return !is0(a) || (1 / a === 1 / b);
    }
    // A strict comparison is necessary because `NULL == undefined`.
    if (isNil(a) || isNil(b)) {
        return a === b;
    }
    // Compare `[[Class]]` names.
    className = objectToString(a);
    if (className !== objectToString(b)) {
        return false;
    }
    switch (className) {
        // Strings, numbers, regular expressions, dates, and booleans are compared by value.
    case createToStringResult('RegExp'):
        // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
    case createToStringResult('String'):
        // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
        // equivalent to `new String("5")`.
        return '' + a === '' + b;
    case createToStringResult('Number'):
        // `NaN`s are equivalent, but non-reflexive.
        // Object(NaN) is equivalent to NaN
        aNumber = toNumber(a);
        bNumber = toNumber(b);
        if (aNumber !== aNumber) {
            return bNumber === bNumber;
        }
        // An `egal` comparison is performed for other numeric values.
        return is0(aNumber) ? 1 / aNumber === 1 / b : aNumber === bNumber;
    case createToStringResult('Date'):
    case createToStringResult('Boolean'):
        // Coerce dates and booleans to numeric primitive values. Dates are compared by their
        // millisecond representations. Note that invalid dates with millisecond representations
        // of `NaN` are not equivalent.
        return toNumber(a) === toNumber(b);
    }
    areArrays = className === createToStringResult('Array');
    if (!areArrays) {
        if (!isObject(a) || !isObject(b)) {
            return false;
        }
        // Objects with different constructors are not equivalent, but `Object`s or `Array`s
        // from different frames are.
        aCtor = a[CONSTRUCTOR];
        bCtor = b[CONSTRUCTOR];
        if (aCtor !== bCtor && !(isFunction(aCtor) && isInstance(aCtor, aCtor) && isFunction(bCtor) && isInstance(bCtor, bCtor)) && (CONSTRUCTOR in a && CONSTRUCTOR in b)) {
            return false;
        }
    }
    // Assume equality for cyclic structures. The algorithm for detecting cyclic
    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.
    // Initializing stack of traversed objects.
    // It's done here since we only need them for objects and arrays comparison.
    aStack = aStack_ || [];
    bStack = bStack_ || [];
    length = aStack.length;
    while (length--) {
        // Linear search. Performance is inversely proportional to the number of
        // unique nested structures.
        if (aStack[length] === a) {
            return bStack[length] === b;
        }
    }
    // Add the first object to the stack of traversed objects.
    aStack.push(a);
    bStack.push(b);
    // Recursively compare objects and arrays.
    if (areArrays) {
        // Compare array lengths to determine if a deep comparison is necessary.
        length = a.length;
        if (length !== b.length) {
            return false;
        }
        // Deep compare the contents, ignoring non-numeric properties.
        while (length--) {
            if (!isEqual(a[length], b[length], aStack, bStack)) {
                return false;
            }
        }
    } else {
        // Deep compare objects.
        objKeys = keys(a);
        length = objKeys.length;
        // Ensure that both objects contain the same number of properties before comparing deep equality.
        if (keys(b).length !== length) {
            return false;
        }
        while (length--) {
            // Deep compare each member
            key = objKeys[length];
            if (!(has(b, key) && isEqual(a[key], b[key], aStack, bStack))) {
                return false;
            }
        }
    }
    // Remove the first object from the stack of traversed objects.
    aStack.pop();
    bStack.pop();
    return true;
}
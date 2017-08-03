var SYMBOL = 'symbol';
var isStrictlyEqual = require('../strictly-equal');
var callObjectToString = require('@timelaps/hacks/to-string');
var createToStringResult = require('@timelaps/hacks/to-string-result');
var symbolTag = createToStringResult(SYMBOL);
var isObject = require('../object');
var isSymbolWrap = require('../type-wrap')(SYMBOL);
module.exports = function isSymbol(value) {
    return isSymbolWrap(value) || (isObject(value) && isStrictlyEqual(callObjectToString(value), symbolTag));
};
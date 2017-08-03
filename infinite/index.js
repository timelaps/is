var INFINITY = Infinity;
var NEGATIVE_INFINITY = -INFINITY;
var isStrictlyEqual = require('../strictly-equal');
var isNumber = require('../number');
module.exports = function (value) {
    return isStrictlyEqual(value, INFINITY) || isStrictlyEqual(value, NEGATIVE_INFINITY);
};
var isStrictlyEqual = require('../strictly-equal');
var isValue = require('../value');
var isBoolean = require('../boolean');
var isString = require('../string');
var isNumber = require('../number');
var isInteger = require('../integer');
module.exports = function (key) {
    // -1 for arrays
    // any other data type ensures string
    return isString(key) || (!isStrictlyEqual(key, -1) && isNumber(key) && isInteger(key));
};
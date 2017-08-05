var isArray = require('../array');
var isWindow = require('../window');
var isString = require('../string');
var isFunction = require('../function');
var isNumber = require('../number');
var MAX_ARRAY_INDEX = require('@timelaps/constants/max-array-index');
module.exports = function isArrayLike(collection) {
    var length;
    return isArray(collection) || (isNumber(length = !!collection && collection.length) && !isString(collection) && length >= 0 && length <= MAX_ARRAY_INDEX && !isFunction(collection));
};
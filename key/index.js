var isString = require('../string');
var isNumber = require('../number');
var isInteger = require('../integer');
module.exports = function (key) {
    // -1 for arrays
    // any other data type ensures string
    return isString(key) || (key >= 0 && isNumber(key) && isInteger(key));
};
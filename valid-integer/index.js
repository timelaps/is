var MAX_INTEGER = require('@timelaps/constants/max-integer');
var isNumber = require('../number');
var MIN_INTEGER = -MAX_INTEGER;
module.exports = function isValidInteger(number) {
    return isNumber(number) && number >= MIN_INTEGER && number <= MAX_INTEGER;
};
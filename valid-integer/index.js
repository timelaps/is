var MAX_INTEGER = require('@timelaps/constants/max-integer');
var isNumber = require('../number');
module.exports = function isValidInteger(number) {
    return isNumber(number) && number >= -MAX_INTEGER && number <= MAX_INTEGER;
};
var isNumber = require('../number');
var isInfinite = require('../infinite');
module.exports = function (value) {
    return isNumber(value) && !isInfinite(value);
};
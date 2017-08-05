var isNumber = require('../number');
module.exports = function isDecimal(a) {
    return isNumber(a) && parseInt(a, 10) !== a;
};
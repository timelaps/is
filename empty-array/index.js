var is0 = require('../0');
var isArray = require('../array');
module.exports = function isEmptyArray(array) {
    return isArray(array) && is0(array.length);
};
var isStrictlyEqual = require('../strictly-equal');
var isNan = require('../nan');
module.exports = function same(a, b) {
    return isNan(a) ? isNan(b) : isStrictlyEqual(a, b);
};
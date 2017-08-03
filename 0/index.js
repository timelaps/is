var isStrictlyEqual = require('../strictly-equal');
module.exports = function is0(value) {
    return isStrictlyEqual(value, 0);
};
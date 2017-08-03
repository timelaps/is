var isStrictlyEqual = require('../strictly-equal');
module.exports = function isFalse(item) {
    return isStrictlyEqual(item, false);
};
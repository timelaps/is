var isStrictlyEqual = require('../strictly-equal');
module.exports = function (item) {
    return isStrictlyEqual(!!item, false);
};
var isStrictlyEqual = require('../strictly-equal');
var isFinite = require('../finite');
module.exports = function (num) {
    return isFinite(num) && isStrictlyEqual(num, Math.round(num));
};
var isStrictlyEqual = require('../strictly-equal');
var castBoolean = require('@timelaps/hacks/to-boolean');
module.exports = function (item) {
    return isStrictlyEqual(castBoolean(item), true);
};
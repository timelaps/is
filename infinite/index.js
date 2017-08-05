var INFINITY = Infinity;
var NEGATIVE_INFINITY = -INFINITY;
module.exports = function (value) {
    return value === INFINITY || value === NEGATIVE_INFINITY;
};
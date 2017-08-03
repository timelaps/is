var isStrictlyEqual = require('../strictly-equal');
module.exports = function typeWrap(type_, fn_) {
    var ty = type_ && type_.toLowerCase && type_.toLowerCase();
    var fn = fn_ || returnsTrue;
    return function (thing) {
        return isStrictlyEqual(typeof thing, ty) && fn(thing);
    };
};

function returnsTrue() {
    return true;
}
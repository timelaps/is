module.exports = function typeWrap(type_, fn_) {
    var ty = type_ && type_.toLowerCase && type_.toLowerCase();
    var fn = fn_ || function returnsTrue() {
        return true;
    };
    return function (thing) {
        return typeof thing === ty && fn(thing);
    };
};
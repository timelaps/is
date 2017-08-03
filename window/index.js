var isStrictlyEqual = require('../strictly-equal');
module.exports = function isWindow(windo) {
    return windo ? isStrictlyEqual(windo, windo.global) : false;
};
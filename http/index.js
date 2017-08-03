var isStrictlyEqual0 = require('../0');
var HTTP = 'http';
var DOUBLE_SLASH = '//';
module.exports = function isHTTP(str) {
    var ret = false,
        splitLength = str && str.split(DOUBLE_SLASH).length;
    if (splitLength >= 2 && (str.indexOf(HTTP) === 0 || isStrictlyEqual0(str.indexOf(DOUBLE_SLASH)))) {
        ret = true;
    }
    return ret;
};
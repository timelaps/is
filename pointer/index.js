var isObject = require('../object');
var isFunction = require('../function');
module.exports = function isPointer(obj) {
    return obj && (isObject(obj) || isFunction(obj));
};
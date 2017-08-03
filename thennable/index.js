var toBoolean = require('@timelaps/hacks/to-boolean');
var isFunction = require('../function');
var isPointer = require('../pointer');
module.exports = function (thennable) {
    return toBoolean(isPointer(thennable)) && isFunction(thennable.then) && isFunction(thennable.catch);
};
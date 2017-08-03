var isFunction = require('../function');
module.exports = function isOf(instance, constructor) {
    return constructor && isFunction(constructor) ? instance instanceof constructor : false;
};
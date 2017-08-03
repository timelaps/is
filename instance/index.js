var isFunction = require('../function');
module.exports = function isInstance(instance, constructor) {
    return isFunction(constructor) && instance instanceof constructor;
};
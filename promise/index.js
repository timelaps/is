var isInstance = require('../instance');
module.exports = function (promise, Promise) {
    return isInstance(promise, Promise || global.Promise);
};
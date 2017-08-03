var isOf = require('../of');
module.exports = function (promise, Promise) {
    return isOf(promise, Promise || global.Promise);
};
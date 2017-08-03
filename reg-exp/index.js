var isOf = require('../of');
module.exports = function (item) {
    return isOf(item, RegExp);
};
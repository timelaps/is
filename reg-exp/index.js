var isInstance = require('../instance');
module.exports = function (item) {
    return isInstance(item, RegExp);
};
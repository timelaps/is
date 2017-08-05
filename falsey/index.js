var isFalse = require('../false');
var toBoolean = require('@timelaps/hacks/to-boolean');
module.exports = function (item) {
    return isFalse(toBoolean(item));
};
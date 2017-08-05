var isTrue = require('../true');
var toBoolean = require('@timelaps/hacks/to-boolean');
module.exports = function (item) {
    return isTrue(toBoolean(item));
};
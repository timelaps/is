var isNotNan = require('../not-nan');
module.exports = function isNan(item) {
    return !isNotNan(item);
};
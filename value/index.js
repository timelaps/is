var isNil = require('../nil');
var notNan = require('../not-nan');
module.exports = function isValue(value) {
    return notNan(value) && !isNil(value);
};
var isNil = require('../nil');
module.exports = function isDefined(value) {
    return !isNil(value);
};
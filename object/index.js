module.exports = require('../type-wrap')('object', function (item) {
    // check null
    return !!item;
});
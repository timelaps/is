var isStrictlyEqual = require('../strictly-equal');
module.exports = function notNaN(value) {
    return isStrictlyEqual(value, value);
};
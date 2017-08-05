var isNan = require('../nan');
module.exports = function same(a, b) {
    return a === b || isNan(a) && isNan(b);
};
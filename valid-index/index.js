var isInteger = require('../integer');
module.exports = function isValidIndex(index) {
    return index >= 0 && isInteger(index);
};
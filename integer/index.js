var isFinite = require('../finite');
module.exports = function (num) {
    return isFinite(num) && num === parseInt(num);
};
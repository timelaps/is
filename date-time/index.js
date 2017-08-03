var u, isDefined = require('../defined'),
    invalidDateString = toString();
module.exports = function isValidDate(value) {
    return toString(value) !== invalidDateString;
};

function toString(date) {
    return (new Date(isDefined(date) ? date : u)).toString();
}
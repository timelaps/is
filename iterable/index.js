module.exports = function isIterable(array) {
    return isArrayLike(array) && array.length && array.hasOwnProperty(array.length - 1);
};
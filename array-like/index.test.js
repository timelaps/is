var isArrayLike = require('.');
var b = require('@timelaps/batterie');
b.describe('isArrayLike', function () {
    b.expect(isArrayLike).toBeFunction();
    b.expect(isArrayLike()).toBeFalse();
    b.expect(isArrayLike(1)).toBeFalse();
    b.expect(isArrayLike(false)).toBeFalse();
    b.expect(isArrayLike(function () {})).toBeFalse();
    b.expect(isArrayLike([])).toBeTrue();
    b.expect(isArrayLike({})).toBeFalse();
    b.expect(isArrayLike({
        '0': true,
        '1': false,
        length: 2
    })).toBeTrue();
});
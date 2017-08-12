var b = require('@timelaps/batterie');
var isValidIndex = require('.');
b.describe('isValidIndex', function () {
    b.expect(isValidIndex).toBeFunction();
    b.it('returns false for non numbers', function (t) {
        t.expect(isValidIndex(null)).toBeFalse();
        t.expect(isValidIndex()).toBeFalse();
        t.expect(isValidIndex('')).toBeFalse();
        t.expect(isValidIndex('string')).toBeFalse();
        t.expect(isValidIndex([])).toBeFalse();
        t.expect(isValidIndex({})).toBeFalse();
        t.expect(isValidIndex(false)).toBeFalse();
        t.expect(isValidIndex(true)).toBeFalse();
        t.expect(isValidIndex(NaN)).toBeFalse();
    }, 9);
    b.it('returns false for all decimals', function (t) {
        t.expect(isValidIndex(Math.random())).toBeFalse();
    });
    b.it('returns true for positive integers', function (t) {
        t.expect(isValidIndex(-1)).toBeFalse();
        t.expect(isValidIndex(0)).toBeTrue();
        t.expect(isValidIndex(-0)).toBeTrue();
        t.expect(isValidIndex(-0)).toBeTrue();
        t.expect(isValidIndex(10000)).toBeTrue();
    }, 5);
});
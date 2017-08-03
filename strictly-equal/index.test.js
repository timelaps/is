var isStrictlyEqual = require('.');
var b = require('@timelaps/batterie');
b.describe('isStrictlyEqual', function () {
    b.expect(isStrictlyEqual, 'toBeFunction');
    b.expect(isStrictlyEqual(), 'toBeTrue');
    b.expect(isStrictlyEqual(''), 'toBeFalse');
    b.expect(isStrictlyEqual(NaN, NaN), 'toBeFalse');
    b.expect(isStrictlyEqual(1, 1), 'toBeTrue');
    b.expect(isStrictlyEqual('1', '1'), 'toBeTrue');
    b.expect(isStrictlyEqual('1', 1), 'toBeFalse');
    b.expect(isStrictlyEqual(function () {}, function () {}), 'toBeFalse');
    b.expect(isStrictlyEqual({}, {}), 'toBeFalse');
});
var isFalse = require('.');
var b = require('@timelaps/batterie');
b.describe('isFalse', function () {
    b.expect(isFalse, 'toBeFunction');
    b.expect(isFalse(), 'toBeFalse');
    b.expect(isFalse(null), 'toBeFalse');
    b.expect(isFalse({}), 'toBeFalse');
    b.expect(isFalse([]), 'toBeFalse');
    b.expect(isFalse(function () {}), 'toBeFalse');
    b.expect(isFalse(false), 'toBeTrue');
    b.expect(isFalse(true), 'toBeFalse');
});
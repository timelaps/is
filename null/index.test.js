var isNull = require('.');
var b = require('@timelaps/batterie');
b.describe('isNull', function () {
    b.expect(isNull, 'toBeFunction');
    b.expect(isNull(), 'toBeFalse');
    b.expect(isNull(null), 'toBeTrue');
    b.expect(isNull(1), 'toBeFalse');
    b.expect(isNull(NaN), 'toBeFalse');
    b.expect(isNull(function () {}), 'toBeFalse');
});
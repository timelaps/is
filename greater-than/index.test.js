var isGreaterThan = require('.');
var b = require('@timelaps/batterie');
b.describe('isGreaterThan', function () {
    b.expect(isGreaterThan, 'toBeFunction');
    b.expect(isGreaterThan(), 'toBeFalse');
    b.expect(isGreaterThan(4, 5), 'toBeFalse');
    b.expect(isGreaterThan(4, 3), 'toBeTrue');
});
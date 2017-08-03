var isInteger = require('.');
var b = require('@timelaps/batterie');
b.describe('isInteger', function () {
    b.expect(isInteger, 'toBeFunction');
    b.expect(isInteger(), 'toBeFalse');
    b.expect(isInteger(5), 'toBeTrue');
    b.expect(isInteger(5.1), 'toBeFalse');
    b.expect(isInteger(Infinity), 'toBeFalse');
});
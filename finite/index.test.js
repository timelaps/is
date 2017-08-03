var isFinite = require('.');
var b = require('@timelaps/batterie');
b.describe('isFinite', function () {
    b.expect(isFinite, 'toBeFunction');
    b.expect(isFinite(), 'toBeFalse');
    b.expect(isFinite(null), 'toBeFalse');
    b.expect(isFinite({}), 'toBeFalse');
    b.expect(isFinite([]), 'toBeFalse');
    b.expect(isFinite(function () {}), 'toBeFalse');
    b.expect(isFinite(false), 'toBeFalse');
    b.expect(isFinite(true), 'toBeFalse');
    b.expect(isFinite(0), 'toBeTrue');
    b.expect(isFinite(Infinity), 'toBeFalse');
    b.expect(isFinite(-Infinity), 'toBeFalse');
});
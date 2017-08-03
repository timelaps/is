var isOf = require('.');
var b = require('@timelaps/batterie');
b.describe('isOf', function () {
    b.expect(isOf, 'toBeFunction');
    b.expect(isOf(), 'toBeFalse');
    b.expect(isOf(null), 'toBeFalse');
    b.expect(isOf(function () {}, Function), 'toBeTrue');
    b.expect(isOf(new Class(), Class), 'toBeTrue');

    function Class() {}
});
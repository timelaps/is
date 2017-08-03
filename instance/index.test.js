var isInstance = require('.');
var b = require('@timelaps/batterie');
b.describe('isInstance', function () {
    b.expect(isInstance, 'toBeFunction');
    b.expect(isInstance(), 'toBeFalse');
    b.expect(isInstance(null), 'toBeFalse');
    b.expect(isInstance(function () {}, Function), 'toBeTrue');
    b.expect(isInstance(new Class(), Class), 'toBeTrue');

    function Class() {}
});
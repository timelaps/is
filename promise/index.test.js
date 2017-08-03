var isPromise = require('.');
var b = require('@timelaps/batterie');
b.describe('isPromise', function () {
    b.expect(isPromise, 'toBeFunction');
    b.expect(isPromise(), 'toBeFalse');
    if (global.Promise) {
        b.expect(isPromise(new global.Promise(function () {})), 'toBeTrue');
    }
    b.expect(isPromise({
        then: function () {},
        catch: function () {}
    }), 'toBeFalse');
});
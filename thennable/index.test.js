var isThennable = require('.');
var b = require('@timelaps/batterie');
b.describe('isThennable', function () {
    b.expect(isThennable, 'toBeFunction');
    b.expect(isThennable(), 'toBeFalse');
    if (global.Promise) {
        b.expect(isThennable(new global.Promise(function () {})), 'toBeTrue');
    }
    b.expect(isThennable({
        then: function () {},
        catch: function () {}
    }), 'toBeTrue');
});
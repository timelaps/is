var isWindow = require('.');
var b = require('@timelaps/batterie');
b.describe('isWindow', function () {
    b.expect(isWindow, 'toBeFunction');
    b.expect(isWindow(), 'toBeFalse');
    b.expect(isWindow(null), 'toBeFalse');
    b.expect(isWindow(NaN), 'toBeFalse');
    b.expect(isWindow(false), 'toBeFalse');
    b.expect(isWindow(0), 'toBeFalse');
    b.expect(isWindow(''), 'toBeFalse');
    b.expect(isWindow('thing'), 'toBeFalse');
    b.expect(isWindow(function () {}), 'toBeFalse');
    b.expect(isWindow({}), 'toBeFalse');
    b.expect(isWindow(global), 'toBeTrue');
    var globl = {};
    globl.global = globl;
    b.expect(isWindow(globl), 'toBeTrue');
});
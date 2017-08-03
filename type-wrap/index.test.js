var isTypeWrap = require('.');
var b = require('@timelaps/batterie');
b.describe('isTypeWrap', function () {
    b.expect(isTypeWrap, 'toBeFunction');
    b.expect(isTypeWrap(), 'toBeFunction');
    b.expect(isTypeWrap('string')(''), 'toBeTrue');
    b.expect(isTypeWrap('number')(1), 'toBeTrue');
    b.expect(isTypeWrap('object')({}), 'toBeTrue');
});
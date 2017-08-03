var isDateTime = require('.');
var b = require('@timelaps/batterie');
b.describe('isDateTime', function () {
    b.expect(isDateTime).toBeFunction();
    b.it('validates a real date', function (t) {
        t.expect(isDateTime(new Date())).toBeTrue();
    });
    b.it('filters invalid dates', function (t) {
        t.expect(isDateTime(new Date(NaN))).toBeFalse();
    });
});
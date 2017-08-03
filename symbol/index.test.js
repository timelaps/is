var isSymbol = require('.');
var b = require('@timelaps/batterie');
b.describe('isSymbol', function () {
    b.expect(isSymbol, 'toBeFunction');
    b.expect(isSymbol(), 'toBeFalse');
    if (global.Symbol) {
        b.expect(isSymbol(global.Symbol()), 'toBeTrue');
    }
});
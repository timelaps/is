var isValueEqual = module.exports = require('./value-equal');
isValueEqual['0'] = require('./0');
isValueEqual.arrayLike = require('./array-like');
isValueEqual.array = require('./array');
isValueEqual.boolean = require('./boolean');
isValueEqual.defined = require('./defined');
isValueEqual.emptyArray = require('./empty-array');
isValueEqual.equal = require('./equal');
isValueEqual.false = require('./false');
isValueEqual.falsey = require('./falsey');
isValueEqual.finite = require('./finite');
isValueEqual.function = require('./function');
isValueEqual.greaterThan = require('./greater-than');
isValueEqual.http = require('./http');
isValueEqual.infinite = require('./infinite');
isValueEqual.integer = require('./integer');
isValueEqual.key = require('./key');
isValueEqual.nan = require('./nan');
isValueEqual.nil = require('./nil');
isValueEqual.null = require('./null');
isValueEqual.number = require('./number');
isValueEqual.object = require('./object');
isValueEqual.of = require('./instance');
isValueEqual.promise = require('./promise');
isValueEqual.regExp = require('./reg-exp');
isValueEqual.same = require('./same');
isValueEqual.strictlyEqual = require('./strictly-equal');
isValueEqual.string = require('./string');
isValueEqual.symbol = require('./symbol');
isValueEqual.thennable = require('./thennable');
isValueEqual.true = require('./true');
isValueEqual.truthy = require('./truthy');
isValueEqual.undefined = require('./undefined');
isValueEqual.validInteger = require('./valid-integer');
isValueEqual.value = require('./value');
isValueEqual.window = require('./window');
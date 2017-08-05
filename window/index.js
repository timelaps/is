var toBoolean = require('@timelaps/hacks/to-boolean');
module.exports = function isWindow(windo) {
    return toBoolean(windo && (windo === windo.global || windo === windo.window));
};
module.exports = isBinaryMatch;

function isBinaryMatch(lookingFor) {
    var boolLookingFor = !lookingFor;
    return function (assertment) {
        var boolAssertment = !assertment;
        return boolAssertment === boolLookingFor;
    };
}
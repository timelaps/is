export function isBinaryMatch(lookingFor?: any): ((_?: any) => boolean) {
  const boolLookingFor = !lookingFor
  return function (assertment?: any): boolean {
    const boolAssertment = !assertment
    return boolAssertment === boolLookingFor
  }
}

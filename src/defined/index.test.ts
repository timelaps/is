import { isDefined } from './'
test('isDefined', () => {
  expect(isDefined).toBeFunction()
  expect(isDefined()).toBeFalse()
  expect(isDefined(null)).toBeFalse()
  expect(isDefined({})).toBeTrue()
  expect(isDefined([])).toBeTrue()
  expect(isDefined(() => {})).toBeTrue()
  expect(isDefined(true)).toBeTrue()
  expect(isDefined(false)).toBeTrue()
})

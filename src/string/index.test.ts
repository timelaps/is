import { isString } from './'
test('isString', () => {
  expect(isString).toBeFunction()
  expect(isString()).toBeFalse()
  expect(isString('')).toBeTrue()
  expect(isString(NaN)).toBeFalse()
  expect(isString(1)).toBeFalse()
  expect(isString('1')).toBeTrue()
  expect(isString(() => {})).toBeFalse()
  expect(isString({})).toBeFalse()
})

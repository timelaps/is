import { isValidInteger } from '.'
test('isValidInteger', function () {
  expect(isValidInteger).toBeFunction()
  expect(isValidInteger()).toBeFalse()
  expect(isValidInteger(null)).toBeFalse()
  expect(isValidInteger(false)).toBeFalse()
  expect(isValidInteger(0)).toBeTrue()
  expect(isValidInteger(1e99999)).toBeFalse()
})
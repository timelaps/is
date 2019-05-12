import { isTruthy } from './'
test('isTruthy', function () {
  expect(isTruthy).toBeFunction()
  expect(isTruthy()).toBeFalse()
  expect(isTruthy(false)).toBeFalse()
  expect(isTruthy(null)).toBeFalse()
  expect(isTruthy(0)).toBeFalse()
  expect(isTruthy('')).toBeFalse()
  expect(isTruthy(true)).toBeTrue()
  expect(isTruthy(1)).toBeTrue()
  expect(isTruthy({})).toBeTrue()
  expect(isTruthy(() => {})).toBeTrue()
})
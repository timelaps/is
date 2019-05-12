import { isInteger } from './'
test('isInteger', function () {
  expect(isInteger).toBeFunction()
  expect(isInteger()).toBeFalse()
  expect(isInteger(5)).toBeTrue()
  expect(isInteger(5.1)).toBeFalse()
  expect(isInteger(Infinity)).toBeFalse()
})
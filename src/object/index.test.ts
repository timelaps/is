import { isObject } from './'
test('isObject', function () {
  expect(isObject).toBeFunction()
  expect(isObject()).toBeFalse()
  expect(isObject(null)).toBeFalse()
  expect(isObject(1)).toBeFalse()
  expect(isObject(-1)).toBeFalse()
  expect(isObject(Infinity)).toBeFalse()
  expect(isObject(NaN)).toBeFalse()
  expect(isObject(function () {})).toBeFalse()
  expect(isObject({})).toBeTrue()
})

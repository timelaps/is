import { isNil } from './'
test('isNil', function () {
  expect(isNil).toBeFunction()
  expect(isNil()).toBeTrue()
  expect(isNil(undefined)).toBeTrue()
  expect(isNil(null)).toBeTrue()
  expect(isNil(1)).toBeFalse()
  expect(isNil(NaN)).toBeFalse()
  expect(isNil(function () {})).toBeFalse()
  expect(isNil({})).toBeFalse()
})
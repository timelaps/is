import { isArray } from './index'
test('isArray', () => {
  expect(isArray).toBeFunction()
  expect(isArray(1)).toBeFalse()
  expect(isArray(false)).toBeFalse()
  expect(isArray(function () {})).toBeFalse()
  expect(isArray([])).toBeTrue()
  expect(isArray({})).toBeFalse()
  expect(isArray({
    '0': true,
    '1': false,
    length: 2
  })).toBeFalse()
})

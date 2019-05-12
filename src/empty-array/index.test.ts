import { isEmptyArray } from './'
test('isEmptyArray', () => {
  expect(isEmptyArray).toBeFunction()
  expect(isEmptyArray()).toBeFalse()
  expect(isEmptyArray(null)).toBeFalse()
  expect(isEmptyArray({})).toBeFalse()
  expect(isEmptyArray([1])).toBeFalse()
  expect(isEmptyArray([])).toBeTrue()
  expect(isEmptyArray(() => {})).toBeFalse()
  expect(isEmptyArray(true)).toBeFalse()
  expect(isEmptyArray(false)).toBeFalse()
})
import { isFalse } from './'
test('isFalse', () => {
  expect(isFalse).toBeFunction()
  expect(isFalse()).toBeFalse()
  expect(isFalse(null)).toBeFalse()
  expect(isFalse({})).toBeFalse()
  expect(isFalse([])).toBeFalse()
  expect(isFalse(function () {})).toBeFalse()
  expect(isFalse(false)).toBeTrue()
  expect(isFalse(true)).toBeFalse()
})
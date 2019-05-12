import { isFalsey } from './'
test('isFalsey', function () {
  expect(isFalsey).toBeFunction()
  expect(isFalsey()).toBeTrue()
  expect(isFalsey(null)).toBeTrue()
  expect(isFalsey({})).toBeFalse()
  expect(isFalsey([])).toBeFalse()
  expect(isFalsey(() => {})).toBeFalse()
  expect(isFalsey(false)).toBeTrue()
  expect(isFalsey(true)).toBeFalse()
})
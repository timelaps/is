import { isKey } from './'
test('isKey', () => {
  expect(isKey).toBeFunction()
  expect(isKey()).toBeFalse()
  expect(isKey(5)).toBeTrue()
  expect(isKey(5.1)).toBeFalse()
  expect(isKey(Infinity)).toBeFalse()
  expect(isKey('')).toBeTrue()
  expect(isKey('key')).toBeTrue()
  expect(isKey({})).toBeFalse()
})

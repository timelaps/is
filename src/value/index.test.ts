import { isValue } from './'
test('isValue', () => {
  expect(isValue).toBeFunction()
  expect(isValue()).toBeFalse()
  expect(isValue(null)).toBeFalse()
  expect(isValue(NaN)).toBeFalse()
  expect(isValue(false)).toBeTrue()
  expect(isValue(0)).toBeTrue()
  expect(isValue('')).toBeTrue()
  expect(isValue('thing')).toBeTrue()
  expect(isValue(() => {})).toBeTrue()
  expect(isValue({})).toBeTrue()
})

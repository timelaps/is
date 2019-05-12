import { isNumber } from './'
test('isNumber', () => {
  expect(isNumber).toBeFunction()
  expect(isNumber()).toBeFalse()
  expect(isNumber(null)).toBeFalse()
  expect(isNumber(1)).toBeTrue()
  expect(isNumber(-1)).toBeTrue()
  expect(isNumber(Infinity)).toBeTrue()
  expect(isNumber(NaN)).toBeFalse()
  expect(isNumber(() => {})).toBeFalse()
})
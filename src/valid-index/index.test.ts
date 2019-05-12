import { isValidIndex } from './'
test('isValidIndex', () => {
  expect(isValidIndex).toBeFunction()
})
it('returns false for non numbers', () => {
  expect(isValidIndex(null)).toBeFalse()
  expect(isValidIndex()).toBeFalse()
  expect(isValidIndex('')).toBeFalse()
  expect(isValidIndex('string')).toBeFalse()
  expect(isValidIndex([])).toBeFalse()
  expect(isValidIndex({})).toBeFalse()
  expect(isValidIndex(false)).toBeFalse()
  expect(isValidIndex(true)).toBeFalse()
  expect(isValidIndex(NaN)).toBeFalse()
}, 9)
it('returns false for all decimals', () => {
  expect(isValidIndex(Math.random())).toBeFalse()
})
it('returns true for positive integers', () => {
  expect(isValidIndex(-1)).toBeFalse()
  expect(isValidIndex(0)).toBeTrue()
  expect(isValidIndex(-0)).toBeTrue()
  expect(isValidIndex(-0)).toBeTrue()
  expect(isValidIndex(10000)).toBeTrue()
})

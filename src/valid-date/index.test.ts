import { isValidDate } from './'
test('validates a real date', () => {
  expect(isValidDate(new Date())).toBeTrue()
})
test('filters invalid dates', () => {
  expect(isValidDate(new Date(NaN))).toBeFalse()
})
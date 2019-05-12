import { isNaN } from './'
test('isNaN', () => {
  expect(isNaN).toBeFunction()
  expect(isNaN()).toBeFalse()
  expect(isNaN(1)).toBeFalse()
  expect(isNaN(NaN)).toBeTrue()
})

import { isInfinite } from './'
test('isInfinite', () => {
  expect(isInfinite).toBeFunction()
  expect(isInfinite()).toBeFalse()
  expect(isInfinite(Infinity)).toBeTrue()
  expect(isInfinite(-Infinity)).toBeTrue()
})
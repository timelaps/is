import { isZero } from './'
test('isZero', () => {
  expect(isZero(1)).toBeFalse()
  expect(isZero(false)).toBeFalse()
  expect(isZero(0)).toBeTrue()
  expect(isZero('0')).toBeFalse()
})

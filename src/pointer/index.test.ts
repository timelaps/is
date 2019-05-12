import { isPointer } from './'
test('isPointer', () => {
  expect(isPointer()).toBeFalse()
  expect(isPointer('')).toBeFalse()
  expect(isPointer(1)).toBeFalse()
  expect(isPointer({})).toBeTrue()
  expect(isPointer(() => {})).toBeTrue()
  expect(isPointer([])).toBeTrue()
})
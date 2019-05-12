import { isTrue } from './'
test('isTrue', () => {
  expect(isTrue).toBeFunction()
  expect(isTrue()).toBeFalse()
  expect(isTrue(false)).toBeFalse()
  expect(isTrue(true)).toBeTrue()
})
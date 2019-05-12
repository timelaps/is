import { isRegExp } from './'
test('isRegExp', () => {
  expect(isRegExp).toBeFunction()
  expect(isRegExp()).toBeFalse()
  expect(isRegExp(/some/)).toBeTrue()
})
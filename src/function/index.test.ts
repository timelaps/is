import { isFunction } from './'
test('isFunction', () => {
  expect(isFunction).toBeFunction()
  expect(isFunction()).toBeFalse()
  expect(isFunction(null)).toBeFalse()
  expect(isFunction({})).toBeFalse()
  expect(isFunction([])).toBeFalse()
  expect(isFunction(() => {})).toBeTrue()
  expect(isFunction(false)).toBeFalse()
  expect(isFunction(true)).toBeFalse()
})
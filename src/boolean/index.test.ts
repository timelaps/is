import { isBoolean } from './'
test('isBoolean', () => {
  expect(isBoolean).toBeFunction()
  expect(isBoolean()).toBeFalse()
  expect(isBoolean(null)).toBeFalse()
  expect(isBoolean({})).toBeFalse()
  expect(isBoolean([])).toBeFalse()
  expect(isBoolean(() => {})).toBeFalse()
  expect(isBoolean(true)).toBeTrue()
  expect(isBoolean(false)).toBeTrue()
})

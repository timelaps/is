import { isUndefined } from './index'
test('isUndefined', () => {
  expect(isUndefined).toBeFunction()
  expect(isUndefined()).toBeTrue()
  expect(isUndefined(null)).toBeFalse()
  expect(isUndefined(false)).toBeFalse()
})

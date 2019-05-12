import { isNull } from './index'
test('isNull', function () {
  expect(isNull).toBeFunction()
  expect(isNull()).toBeFalse()
  expect(isNull(null)).toBeTrue()
  expect(isNull(1)).toBeFalse()
  expect(isNull(NaN)).toBeFalse()
  expect(isNull(() => {})).toBeFalse()
})

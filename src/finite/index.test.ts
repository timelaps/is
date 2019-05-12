import { isFinite } from './index'
test('isFinite', () => {
  expect(isFinite).toBeFunction()
  expect(isFinite()).toBeFalse()
  expect(isFinite(null)).toBeFalse()
  expect(isFinite({})).toBeFalse()
  expect(isFinite([])).toBeFalse()
  expect(isFinite(function () {})).toBeFalse()
  expect(isFinite(false)).toBeFalse()
  expect(isFinite(true)).toBeFalse()
  expect(isFinite(0)).toBeTrue()
  expect(isFinite(Infinity)).toBeFalse()
  expect(isFinite(-Infinity)).toBeFalse()
})
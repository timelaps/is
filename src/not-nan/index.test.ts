import { isNotNaN } from './index'
test('isNotNaN', () => {
  expect(isNotNaN).toBeFunction()
  expect(isNotNaN()).toBeTrue()
  expect(isNotNaN(1)).toBeTrue()
  expect(isNotNaN(NaN)).toBeFalse()
  expect(isNotNaN(() => {})).toBeTrue()
})
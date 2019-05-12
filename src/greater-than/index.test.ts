import { isGreaterThan } from './'
test('isGreaterThan', function () {
  expect(isGreaterThan).toBeFunction()
  expect(isGreaterThan()).toBeFalse()
  expect(isGreaterThan(4, 5)).toBeFalse()
  expect(isGreaterThan(4, 3)).toBeTrue()
})

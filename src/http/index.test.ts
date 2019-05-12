import { isHTTP } from './'
test('isHTTP', function () {
  expect(isHTTP).toBeFunction()
  expect(isHTTP()).toBeFalse()
  expect(() => isHTTP(1)).toThrow()
  expect(isHTTP('//')).toBeTrue()
  expect(isHTTP('http://')).toBeTrue()
  expect(isHTTP('https://')).toBeTrue()
  expect(isHTTP('https://fake.com')).toBeTrue()
})
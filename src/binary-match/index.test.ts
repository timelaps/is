import { isBinaryMatch } from './'
test('is.binaryMatch', () => {
  expect(isBinaryMatch).toBeFunction()
  expect(isBinaryMatch()).toBeFunction()
})
test('allows you to create a curried function to match whatever is passed to it', () => {
  var matcher = isBinaryMatch(null)
  expect(matcher()).toBeTrue()
  expect(matcher(1)).toBeFalse()
})

import { isSymbol } from './'
test('isSymbol', function () {
  expect(isSymbol).toBeFunction()
  expect(isSymbol()).toBeFalse()
  if (global.Symbol) {
    expect(isSymbol(global.Symbol())).toBeTrue()
  }
})
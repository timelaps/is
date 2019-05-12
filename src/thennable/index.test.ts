import { isThennable } from './'
test('isThennable', () => {
  expect(isThennable).toBeFunction()
  expect(isThennable()).toBeFalse()
  if (global.Promise) {
    const thennable = new Promise(() => {})
    expect(isThennable(thennable)).toBeTrue()
  }
  expect(isThennable({
    then: () => {},
    catch: () => {}
  })).toBeTrue()
})
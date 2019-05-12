import { isPromise } from './'
test('isPromise', () => {
  expect(isPromise).toBeFunction()
  expect(isPromise()).toBeFalse()
  if (global.Promise) {
    expect(isPromise(new Promise(() => {}))).toBeTrue()
  }
  expect(isPromise({
    then: () => {},
    catch: () => {}
  })).toBeFalse()
})

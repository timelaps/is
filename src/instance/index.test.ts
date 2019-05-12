import { isInstance } from './'
test('isInstance', () => {
  interface ClassInterface {

  }
  expect(isInstance).toBeFunction()
  expect(isInstance()).toBeFalse()
  expect(isInstance(null)).toBeFalse()
  expect(isInstance(() => {}, Function)).toBeTrue()
  expect(isInstance(new (Class as any)(), Class)).toBeTrue()

  function Class(): void {}
})

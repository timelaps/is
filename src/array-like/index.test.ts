import { isArrayLike } from './'
test('isArrayLike', () => {
  expect(isArrayLike).toBeFunction()
  expect(isArrayLike()).toBeFalse()
  expect(isArrayLike(1)).toBeFalse()
  expect(isArrayLike(false)).toBeFalse()
  expect(isArrayLike(() => {})).toBeFalse()
  expect(isArrayLike([])).toBeTrue()
  expect(isArrayLike({})).toBeFalse()
  expect(isArrayLike({
    '0': true,
    '1': false,
    length: 2
  })).toBeTrue()
})

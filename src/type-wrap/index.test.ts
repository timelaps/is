import { isTypeWrap } from './'
describe('isTypeWrap', () => {
  test('functionality', () => {
    expect(isTypeWrap('string')('')).toBeTrue()
    expect(isTypeWrap('number')(1)).toBeTrue()
    expect(isTypeWrap('object')({})).toBeTrue()
  })
})

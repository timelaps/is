import { isEqual } from './'
test('isEqual', () => {
  expect(isEqual).toBeFunction()
  expect(isEqual()).toBeTrue()
  expect(isEqual(null)).toBeFalse()
  expect(isEqual(NaN, NaN)).toBeFalse()
  expect(isEqual(0, 0)).toBeTrue()
  expect(isEqual(new Date(), new Date(0))).toBeFalse()
  expect(isEqual('', new String(''))).toBeTrue()
  expect(isEqual('', true)).toBeFalse()
  expect(isEqual({}, {})).toBeTrue()
  expect(isEqual([], [])).toBeTrue()
  expect(isEqual([1, 1], [1, 2])).toBeFalse()
  expect(isEqual(() => {}, () => {})).toBeFalse()
  expect(isEqual(true, true)).toBeTrue()
  expect(isEqual(false, true)).toBeFalse()

  function A() {}

  function B() {}
  expect(isEqual(new (A as any)(), new (B as any)())).toBeFalse()
  class C {
    constructor(public input: number) { }
  }
  expect(isEqual(new C(1), new C(2))).toBeFalse()

  const objA1 = circular([1])
  const objB1 = circular([1])
  expect(isEqual(objA1, objB1)).toBeTrue()

  const objA2 = circular([1])
  const objB2 = circular([1, 2])
  expect(isEqual(objA2, objB2)).toBeFalse()

  const asymetricA = {a:1,b:2}
  const asymetricB = {a:1,b:2,c:3}
  expect(isEqual(asymetricA, asymetricB)).toBeFalse()
})

function circular(extraList: any): object {
  const subObjA = {a:1,listA:<any>null,listB:<any>null,extraList}
  const objA = [subObjA]
  subObjA.listA = objA
  objA.push(subObjA)
  return objA
}
import { isWindow } from './index'
test('isWindow', () => {
  expect(isWindow).toBeFunction()
  expect(isWindow()).toBeFalse()
  expect(isWindow(null)).toBeFalse()
  expect(isWindow(NaN)).toBeFalse()
  expect(isWindow(false)).toBeFalse()
  expect(isWindow(0)).toBeFalse()
  expect(isWindow('')).toBeFalse()
  expect(isWindow('thing')).toBeFalse()
  expect(isWindow(function () {})).toBeFalse()
  expect(isWindow({})).toBeFalse()
  expect(isWindow(global)).toBeTrue()
  var globl = {
    global: <any>null
  }
  globl.global = globl
  expect(isWindow(globl)).toBeTrue()
})
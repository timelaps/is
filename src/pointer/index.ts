import { isObject } from '../object'
import { isFunction } from '../function'
export function isPointer(obj?: any): boolean {
  return !!obj && (isObject(obj) || isFunction(obj))
}

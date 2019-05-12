import { isZero } from '../zero'
import { isArray } from '../array'
export function isEmptyArray(array?: any): boolean {
  return isArray(array) && isZero(array.length)
}

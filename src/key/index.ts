import { isString } from '../string'
import { isNumber } from '../number'
import { isInteger } from '../integer'
export function isKey(key?: any): boolean {
  // -1 for arrays
  // any other data type ensures string
  return isString(key) || (key >= 0 && isNumber(key) && isInteger(key))
}

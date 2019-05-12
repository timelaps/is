import { isArray } from '../array'
import { isWindow } from '../window'
import { isString } from '../string'
import { isFunction } from '../function'
import { isNumber } from '../number'
import { maxArrayIndex } from '@timelaps/constants'
export function isArrayLike(collection?: any): boolean {
  var length
  return isArray(collection) || (isNumber(length = !!collection && collection.length) && !isString(collection) && length >= 0 && length <= maxArrayIndex && !isFunction(collection))
}

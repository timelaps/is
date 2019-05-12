import { toBoolean } from '@timelaps/hacks'
import { isFunction } from '../function'
import { isPointer } from '../pointer'
export function isThennable (thennable?: any): boolean {
  return toBoolean(isPointer(thennable)) && isFunction(thennable.then) && isFunction(thennable.catch)
}
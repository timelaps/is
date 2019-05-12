import { isUndefined } from '../undefined'
import { isNull } from '../null'
export function isNil (value?: any): boolean {
  return isNull(value) || isUndefined(value)
}
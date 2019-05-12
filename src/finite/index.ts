import { isNumber } from '../number'
import { isInfinite } from '../infinite'
export function isFinite (value?: any): boolean {
  return isNumber(value) && !isInfinite(value)
}

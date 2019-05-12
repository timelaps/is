import { isNil } from '../nil'
import { isNotNaN } from '../not-nan'
export function isValue(value?: any): boolean {
  return isNotNaN(value) && !isNil(value)
}

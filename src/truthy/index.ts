import { isTrue } from '../true'
import { toBoolean } from '@timelaps/hacks'
export function isTruthy(item?: any): boolean {
  return isTrue(toBoolean(item))
}

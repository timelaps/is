import { isFalse } from '../false'
import { toBoolean } from '@timelaps/hacks'
export function isFalsey(item?: any): boolean {
  return isFalse(toBoolean(item))
}

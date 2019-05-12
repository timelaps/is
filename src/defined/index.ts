import { isNil } from '../nil'
export function isDefined(value?: any): boolean {
  return !isNil(value)
}

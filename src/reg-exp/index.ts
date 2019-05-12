import { isInstance } from '../instance'
export function isRegExp(item?: any): boolean {
  return isInstance(item, RegExp)
}

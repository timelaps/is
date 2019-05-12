import { isInteger } from '../integer'
export function isValidIndex(index?: any): boolean {
  return index >= 0 && isInteger(index)
}
import { isNumber } from '../number'
export function isDecimal(a?: any): boolean {
  return isNumber(a) && (parseInt(a as unknown + '', 10) !== a as unknown)
}

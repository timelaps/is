import { maxInteger } from '@timelaps/constants'
import { isNumber } from '../number'
const minInteger = -maxInteger - 1
export function isValidInteger(num?: any | number): boolean {
  return isNumber(num) && num >= minInteger && num <= maxInteger
}

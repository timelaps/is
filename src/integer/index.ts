import { isFinite } from '../finite'
export function isInteger (num?: any): boolean {
  return isFinite(num) && num === parseInt(num)
}
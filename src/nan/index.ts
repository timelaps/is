import { isNotNaN } from '../not-nan/index'
export function isNaN(item?: any): boolean {
  return !isNotNaN(item)
}

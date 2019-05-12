import { isZero } from '../zero'
const HTTP = 'http'
const DOUBLE_SLASH = '//'
export function isHTTP(str?: any): boolean {
  let ret = false,
    splitLength = str && str.split(DOUBLE_SLASH).length
  if (splitLength >= 2 && (str.indexOf(HTTP) === 0 || isZero(str.indexOf(DOUBLE_SLASH)))) {
    ret = true
  }
  return ret
}
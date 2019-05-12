import { isTypeWrap } from '../type-wrap'
import {
  callToString,
  toStringResult
} from '@timelaps/hacks'
import { isObject } from '../object'
const SYMBOL = 'symbol'
const symbolTag = toStringResult(SYMBOL)
const isSymbolWrap = isTypeWrap(SYMBOL)
export function isSymbol(value?: any): boolean {
  return isSymbolWrap(value) || (isObject(value) && callToString(value) === symbolTag)
}

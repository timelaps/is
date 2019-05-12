import { isTypeWrap, isTypeWrapSignature } from '../type-wrap'
import { toBoolean } from '@timelaps/hacks'
const isObject = isTypeWrap('object', (n) => !!n) as isTypeWrapSignature
export {
  isObject
}

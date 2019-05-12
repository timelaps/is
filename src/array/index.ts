import { isTypeWrap, isTypeWrapSignature } from '../type-wrap'
let isArray: isTypeWrapSignature = Array.isArray
if (!isArray) {
  isArray = isTypeWrap('Array') as isTypeWrapSignature
}
export {
  isArray
}

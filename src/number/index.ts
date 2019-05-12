import { isTypeWrap } from '../type-wrap'
import { isNotNaN } from '../not-nan'
const isNumber = isTypeWrap('Number', isNotNaN)
export { isNumber }

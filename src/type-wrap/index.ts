export type isTypeWrapSignature = (arg?: any) => boolean
export function isTypeWrap(type_?: any, fn_?: isTypeWrapSignature): isTypeWrapSignature {
  const ty = type_ && type_.toLowerCase && type_.toLowerCase()
  const fn = fn_ || ((_?: any) => true)
  return function (arg?: any): arg is boolean {
    return typeof arg === ty && fn(arg)
  }
}

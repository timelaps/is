const INFINITY = Infinity
const NEGATIVE_INFINITY = -INFINITY
export function isInfinite(value?: any): boolean {
  return value === INFINITY || value === NEGATIVE_INFINITY
}

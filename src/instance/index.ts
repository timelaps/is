import { isFunction } from '../function'
export function isInstance(instance?: any, constructor?: any | Function): boolean {
  return isFunction(constructor) && instance instanceof constructor
}

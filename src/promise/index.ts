declare var global: NodeJS.Global
import { isInstance } from '../instance'
export function isPromise(promise?: any, P?: any): boolean {
  return isInstance(promise, P || global.Promise)
}

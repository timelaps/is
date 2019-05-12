import { isArrayLike } from '../array-like'
export function isIterable(array?: any): boolean {
  return isArrayLike(array) && array.length && array.hasOwnProperty(array.length - 1)
}
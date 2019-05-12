import { isDefined } from '../defined'
const u = undefined
const invalidDateString = toString()
export function isValidDate(value?: any): boolean {
  return toString(value) !== invalidDateString
}

function toString(date?: any): string {
  return (new Date(isDefined(date) ? date : u)).toString()
}
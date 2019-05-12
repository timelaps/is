export function isValueEqual(a?: any, b?: any): boolean {
  return a === b || (a !== a && b !== b)
}

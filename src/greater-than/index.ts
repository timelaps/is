export function isGreaterThan(a?: any, b?: any): boolean {
  return (a as unknown as number) > (b as unknown as number)
}

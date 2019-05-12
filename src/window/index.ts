import { toBoolean } from '@timelaps/hacks'
export function isWindow(windo?: any): boolean {
  return toBoolean(windo && (windo === windo.global || windo === windo.window))
}

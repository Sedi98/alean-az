export function localize<T>(_locale: string, value: T): T {
  return value
}

export function translateStatic(locale: string, value: string): string {
  return localize(locale, value)
}

export type DateInput = Date | string | number

export interface FormatOptions {
  locale?: string
  timezone?: string
}

export interface ParseOptions {
  timezone?: string
  defaultDate?: Date
} 
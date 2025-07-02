import { DateInput, ParseOptions } from '../types'
import { parse, parseISO } from 'date-fns'

export const parseDate = (dateString: string, pattern: string, options?: ParseOptions) => {
  return parse(dateString, pattern, options?.defaultDate || new Date())
}

export const parseISODate = (dateString: string) => {
  return parseISO(dateString)
}

export const isValidDate = (date: DateInput) => {
  const dateObj = typeof date === 'string' ? new Date(date) : date
  return dateObj instanceof Date && !isNaN(dateObj.getTime())
} 
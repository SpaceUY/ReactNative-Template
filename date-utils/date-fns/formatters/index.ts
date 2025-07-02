import { DateInput, FormatOptions } from '../types'
import { format, formatDistance, formatRelative } from 'date-fns'

export const formatDate = (date: DateInput, pattern: string, options?: FormatOptions) => {
  const dateObj = typeof date === 'string' ? new Date(date) : date
  return format(dateObj, pattern, options)
}

export const formatDistanceToNow = (date: DateInput, options?: FormatOptions) => {
  const dateObj = typeof date === 'string' ? new Date(date) : date
  return formatDistance(dateObj, new Date(), { addSuffix: true, ...options })
}

export const formatRelativeToNow = (date: DateInput, options?: FormatOptions) => {
  const dateObj = typeof date === 'string' ? new Date(date) : date
  return formatRelative(dateObj, new Date(), options)
} 
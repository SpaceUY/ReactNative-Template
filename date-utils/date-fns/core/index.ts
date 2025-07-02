import { format, isValid, parseISO } from 'date-fns'

export const formatDate = (date: string | Date, formatStr = 'PP') => {
  if (!date) return ''
  
  const parsedDate = typeof date === 'string' ? parseISO(date) : date
  if (!isValid(parsedDate)) return ''
  
  return format(parsedDate, formatStr)
}

export const formatDateTime = (date: string | Date) => {
  return formatDate(date, 'PPpp')
}

export const formatShortDate = (date: string | Date) => {
  return formatDate(date, 'P')
}

export const formatTime = (date: string | Date) => {
  return formatDate(date, 'p')
} 
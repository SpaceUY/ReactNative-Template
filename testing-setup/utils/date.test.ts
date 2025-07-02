import { formatDate, formatDateTime, formatShortDate, formatTime } from '../../utils/date'

describe('Date Utils', () => {
  const testDate = new Date('2024-03-14T15:30:00')

  describe('formatDate', () => {
    it('formats date with default format', () => {
      expect(formatDate(testDate)).toBe('March 14th, 2024')
    })

    it('returns empty string for invalid date', () => {
      expect(formatDate('invalid-date')).toBe('')
    })
  })

  describe('formatDateTime', () => {
    it('formats date and time', () => {
      expect(formatDateTime(testDate)).toMatch(/March 14th, 2024.*3:30 PM/)
    })
  })

  describe('formatShortDate', () => {
    it('formats short date', () => {
      expect(formatShortDate(testDate)).toBe('03/14/2024')
    })
  })

  describe('formatTime', () => {
    it('formats time', () => {
      expect(formatTime(testDate)).toBe('3:30 PM')
    })
  })
}) 
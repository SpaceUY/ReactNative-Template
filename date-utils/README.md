# Date Utils Module

A collection of date formatting and parsing utilities for React Native apps using date-fns.

## Features

- Date formatting with multiple formats
- Relative time formatting (e.g., "2 hours ago")
- Date parsing and validation
- Timezone support
- Locale support

## Required Dependencies

```bash
npm install date-fns
```

## Quick Start

```typescript
import { 
  formatDate, 
  formatDistanceToNow,
  formatRelativeToNow,
  parseDate,
  parseISODate,
  isValidDate 
} from './date-utils'

// Format dates
formatDate(new Date(), 'yyyy-MM-dd')  // "2024-02-15"
formatDate('2024-02-15', 'MMMM do, yyyy')  // "February 15th, 2024"

// Relative time
formatDistanceToNow('2024-02-14')  // "1 day ago"
formatRelativeToNow('2024-02-16')  // "tomorrow"

// Parse dates
parseDate('15/02/2024', 'dd/MM/yyyy')  // Date object
parseISODate('2024-02-15T12:00:00Z')   // Date object

// Validate dates
isValidDate('2024-02-15')  // true
isValidDate('invalid')     // false
```

## API Reference

### Formatting

#### `formatDate(date, pattern, options?)`

Format a date using a pattern string.

```typescript
interface FormatOptions {
  locale?: string
  timezone?: string
}

formatDate(new Date(), 'yyyy-MM-dd')
formatDate('2024-02-15', 'MMMM do, yyyy', { locale: 'es' })
```

#### `formatDistanceToNow(date, options?)`

Format the distance between a date and now.

```typescript
formatDistanceToNow(new Date())  // "less than a minute ago"
formatDistanceToNow('2024-02-14')  // "1 day ago"
```

#### `formatRelativeToNow(date, options?)`

Format a date relative to now.

```typescript
formatRelativeToNow('2024-02-14')  // "yesterday"
formatRelativeToNow('2024-02-16')  // "tomorrow"
```

### Parsing

#### `parseDate(dateString, pattern, options?)`

Parse a date string using a pattern.

```typescript
interface ParseOptions {
  timezone?: string
  defaultDate?: Date
}

parseDate('15/02/2024', 'dd/MM/yyyy')
parseDate('3:30 PM', 'h:mm a', { defaultDate: new Date() })
```

#### `parseISODate(dateString)`

Parse an ISO date string.

```typescript
parseISODate('2024-02-15T12:00:00Z')
```

#### `isValidDate(date)`

Check if a date is valid.

```typescript
isValidDate(new Date())        // true
isValidDate('2024-02-15')     // true
isValidDate('invalid')        // false
```

## Common Date Patterns

- `yyyy-MM-dd` - 2024-02-15
- `MMMM do, yyyy` - February 15th, 2024
- `h:mm a` - 3:30 PM
- `EEEE` - Thursday
- `PPP` - February 15th, 2024
- `pp` - 12:00 PM

## Best Practices

1. **Timezone Handling**
   - Always consider timezones in your application
   - Use the timezone option when needed
   - Store dates in UTC when possible

2. **Localization**
   - Use the locale option for user-facing dates
   - Test with different locales
   - Consider RTL languages

3. **Performance**
   - Cache formatted dates when possible
   - Use memoization for expensive operations
   - Avoid unnecessary re-renders

4. **Validation**
   - Always validate user input
   - Provide clear error messages
   - Have fallback values ready 
# Testing Setup Module

A complete testing setup for React Native apps with Jest and Detox.

## Features

- Pre-configured Jest setup
- Detox E2E testing configuration
- React Testing Library utilities
- TypeScript support
- Common test utilities

## Installation

Install the required dependencies based on your testing needs:

```bash
# For unit/integration testing
npm install --save-dev @testing-library/react-native @testing-library/jest-native jest-expo @types/jest

# For E2E testing
npm install --save-dev detox @types/detox
```

## Quick Start

1. Configure Jest in your `package.json`:

```json
{
  "jest": {
    "preset": "jest-expo",
    "setupFilesAfterEnv": ["./testing-setup/jest/config.ts"]
  }
}
```

2. Set up Detox in your project:

```bash
# Initialize Detox
npx detox init

# Copy our config
cp testing-setup/detox/config.ts .detoxrc.js
```

3. Write tests using our utilities:

```typescript
import { render, fireEvent } from './testing-setup'

describe('TodoList', () => {
  it('adds a new todo', () => {
    const { getByText, getByPlaceholderText } = render(<TodoList />)
    
    const input = getByPlaceholderText('Add todo')
    fireEvent.changeText(input, 'New Todo')
    
    const addButton = getByText('Add')
    fireEvent.press(addButton)
    
    expect(getByText('New Todo')).toBeTruthy()
  })
})
```

## Module Structure

### Jest Configuration

Pre-configured Jest setup with:
- React Native specific settings
- Testing Library extensions
- Common transformers
- Coverage settings

### Detox Configuration

E2E testing setup with:
- iOS and Android configurations
- Debug and release builds
- Simulator/emulator settings

### Test Utilities

Ready-to-use test utilities:
- Custom render function with providers
- Common matchers
- Test helpers

## API Reference

### Jest Setup

```typescript
// jest/config.ts
export default {
  preset: 'jest-expo',
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  // ... more config
}
```

### Detox Setup

```typescript
// detox/config.ts
export default {
  apps: {
    'ios.debug': { /* ... */ },
    'ios.release': { /* ... */ },
    'android.debug': { /* ... */ },
    'android.release': { /* ... */ }
  },
  devices: {
    simulator: { /* ... */ },
    emulator: { /* ... */ }
  }
}
```

### Test Utilities

```typescript
import { render } from './testing-setup'

// Render with providers
const { getByText, ... } = render(<Component />, {
  // Optional render options
})

// Available utilities
export {
  render,
  fireEvent,
  waitFor,
  within,
  // ... more from @testing-library/react-native
}
```

## Best Practices

1. **Unit Testing**
   - Test components in isolation
   - Mock external dependencies
   - Focus on user interactions
   - Use meaningful test descriptions

2. **Integration Testing**
   - Test component interactions
   - Verify data flow
   - Test error scenarios
   - Mock network requests

3. **E2E Testing**
   - Focus on critical user paths
   - Test on both platforms
   - Use real-like data
   - Keep tests maintainable

4. **Performance**
   - Mock heavy operations
   - Clean up after tests
   - Use setup and teardown
   - Avoid test interdependence

## Common Testing Patterns

1. **Component Testing**
```typescript
it('renders correctly', () => {
  const { getByText } = render(<MyComponent />)
  expect(getByText('Hello')).toBeTruthy()
})
```

2. **User Interaction**
```typescript
it('handles user input', () => {
  const { getByPlaceholderText } = render(<Input />)
  fireEvent.changeText(getByPlaceholderText('Enter text'), 'Hello')
})
```

3. **Async Operations**
```typescript
it('loads data', async () => {
  const { findByText } = render(<DataComponent />)
  await findByText('Loaded')
})
```

4. **Context/Provider Testing**
```typescript
it('uses context value', () => {
  const { getByText } = render(<Consumer />, {
    wrapper: ({ children }) => (
      <Provider value="test">{children}</Provider>
    )
  })
})
``` 
# API Client Module

A ready-to-use API client for React Native apps using Axios and TanStack Query (React Query).

## Features

- Pre-configured Axios instance with interceptors
- Easy-to-use React Query hooks for data fetching and mutations
- TypeScript support
- Configurable base URL and headers

## Installation

```bash
npm install @rn-template/api-client
```

## Quick Start

1. Create and configure your API client:

```typescript
import { createApiClient, queryClient, QueryClientProvider } from '@rn-template/api-client'

// Create API client
const api = createApiClient({
  baseURL: 'https://api.example.com',
  headers: {
    'Authorization': 'Bearer your-token'
  }
})

// Wrap your app with QueryClientProvider
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* Your app components */}
    </QueryClientProvider>
  )
}
```

2. Use the hooks in your components:

```typescript
import { createQueryHooks } from '@rn-template/api-client'

// Create hooks with your API instance
const { useApiQuery, useApiMutation } = createQueryHooks(api)

function UserProfile() {
  // Fetch data
  const { data: user, isLoading } = useApiQuery({
    key: ['user', userId],
    path: `/users/${userId}`
  })

  // Update data
  const { mutate: updateUser } = useApiMutation({
    path: `/users/${userId}`,
    method: 'PUT',
    onSuccess: () => {
      // Handle success
    }
  })

  if (isLoading) return <LoadingSpinner />

  return (
    <View>
      <Text>{user.name}</Text>
      <Button 
        onPress={() => updateUser({ name: 'New Name' })}
        title="Update Name"
      />
    </View>
  )
}
```

## API Reference

### `createApiClient(config)`

Creates a configured Axios instance.

```typescript
interface ApiConfig {
  baseURL: string
  timeout?: number
  headers?: Record<string, string>
}
```

### `createQueryHooks(api)`

Creates a set of hooks for data fetching and mutations.

```typescript
interface QueryConfig<T> {
  key: string | string[]
  path: string
  params?: Record<string, any>
}

interface MutationConfig<T> {
  path: string
  method: 'POST' | 'PUT' | 'DELETE'
  onSuccess?: (data: T) => void
}
```

### Pre-configured Query Client

The module exports a pre-configured `queryClient` instance with sensible defaults:
- 5-minute stale time
- 1 retry attempt
- Standard error handling 
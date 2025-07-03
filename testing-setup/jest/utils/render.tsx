import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import React from 'react'
import { render as rtlRender } from '@testing-library/react-native'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
})

export function render(ui: React.ReactElement, options = {}) {
  return rtlRender(ui, {
    wrapper: ({ children }) => (
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    ),
    ...options,
  })
}

export * from '@testing-library/react-native' 
import { QueryClient } from '@tanstack/react-query'
import axios from 'axios'

// Create a custom axios instance
export const api = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Add request interceptor for auth
api.interceptors.request.use(
  (config) => {
    // You can add auth token here
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// Add response interceptor for error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle common errors here
    return Promise.reject(error)
  }
)

// Create Query Client
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      retry: 1,
    },
  },
}) 
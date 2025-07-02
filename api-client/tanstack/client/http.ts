import { ApiConfig } from '../types'
import { QueryClient } from '@tanstack/react-query'
import axios from 'axios'

// Create and configure the API client
export const createApiClient = (config: ApiConfig) => {
  const axiosInstance = axios.create({
    baseURL: config.baseURL,
    timeout: config.timeout || 10000,
    headers: {
      'Content-Type': 'application/json',
      ...config.headers
    }
  })

  // Add request interceptor for auth
  axiosInstance.interceptors.request.use(
    (config) => {
      // You can add auth token here
      return config
    },
    (error) => Promise.reject(error)
  )

  // Add response interceptor for error handling
  axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
      // Handle common errors here
      return Promise.reject(error)
    }
  )

  return axiosInstance
}

// Create and configure the Query Client
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      retry: 1,
    },
  },
}) 
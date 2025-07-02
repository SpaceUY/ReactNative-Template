export interface ApiConfig {
  baseURL: string
  timeout?: number
  headers?: Record<string, string>
}

export interface QueryConfig<T> {
  key: string | string[]
  path: string
  params?: Record<string, any>
}

export interface MutationConfig<T> {
  path: string
  method: 'POST' | 'PUT' | 'DELETE'
  onSuccess?: (data: T) => void
} 
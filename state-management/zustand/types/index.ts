export interface StoreConfig {
  name: string
  initialState?: Record<string, any>
  persist?: boolean
}

export interface StoreApi<T> {
  getState: () => T
  setState: (partial: Partial<T> | ((state: T) => Partial<T>)) => void
  subscribe: (listener: (state: T) => void) => () => void
  reset: () => void
} 
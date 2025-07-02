import { useEffect, useState } from 'react'

import { StoreApi } from '../types'

export function useStore<T, S>(
  store: StoreApi<T>,
  selector: (state: T) => S = (state: T) => state as unknown as S
): S {
  const [state, setState] = useState(() => selector(store.getState()))

  useEffect(() => {
    const unsubscribe = store.subscribe((newState) => {
      setState(selector(newState))
    })
    return unsubscribe
  }, [store, selector])

  return state
} 
import { MutationConfig, QueryConfig } from '../types'
import { useMutation, useQuery } from '@tanstack/react-query'

import { AxiosInstance } from 'axios'

export const createQueryHooks = (api: AxiosInstance) => {
  const useApiQuery = <T>({ key, path, params }: QueryConfig<T>) => {
    return useQuery({
      queryKey: Array.isArray(key) ? key : [key],
      queryFn: async () => {
        const response = await api.get(path, { params })
        return response.data
      }
    })
  }

  const useApiMutation = <T>({ path, method, onSuccess }: MutationConfig<T>) => {
    return useMutation({
      mutationFn: async (data: any) => {
        const response = await api[method.toLowerCase()](path, data)
        return response.data
      },
      onSuccess
    })
  }

  return {
    useApiQuery,
    useApiMutation
  }
} 
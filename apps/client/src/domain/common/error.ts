import { AxiosError } from 'axios'

type ErrorName = 'default' | 'axios'

export interface RequestError extends Error {
  status?: number
  message: string
  name: ErrorName
  data?: any
}

export const constructDefaultError = (e: Error): RequestError => {
  const err = e as AxiosError
  if (!err.isAxiosError) {
    return {
      message: e.message,
      name: 'default',
    }
  }
  return {
    status: err.response?.status,
    message: err.response?.data || err.message,
    name: 'axios',
  }
}

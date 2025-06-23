import { toast } from 'react-toastify'
import { formatRequestError } from './errors'

export const globalErrorToast = (err: {
  error: { data: unknown; status: number }
}): void => {
  const { error } = err

  const errorMessage = formatRequestError(error.data)

  if (error.status !== 401) {
    toast.error(errorMessage)
  }
}

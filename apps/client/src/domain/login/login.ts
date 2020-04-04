import axios from 'axios'
import { LoginResponse, LoginRequest, LoginForm } from '.'
import { constructDefaultError } from '../common/error'

export const login: LoginRequest = async form => {
  try {
    const result = await axios.post<LoginForm, LoginResponse>('/sign-in', form, {
      timeout: 300,
      timeoutErrorMessage: 'Request timeout, please try again later',
    })
    return result
  } catch (e) {
    debugger
    return constructDefaultError(e)
  }
}

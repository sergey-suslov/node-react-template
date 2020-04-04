import { login } from './login'
import { RequestError } from '../common/error'

export interface LoginForm {
  email: string
  password: string
}

export interface LoginResponse {
  accessToken: string
}

export type LoginRequest = (form: LoginForm) => Promise<LoginResponse | RequestError | undefined>

export const loginRequest = login

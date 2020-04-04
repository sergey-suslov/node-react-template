import { loginRequest } from '../../domain/login'
import { LOGGEDIN, LoggedInActionType } from './types'
import { AppDespatcher } from '..'

interface LoginForm {
  email: string
  password: string
}

export type Login = (form: LoginForm) => AppDespatcher
export type LoggedIn = () => LoggedInActionType

const loggedIn: LoggedIn = () => ({
  type: LOGGEDIN,
})

export const login: Login = form => async dispatch => {
  const result = await loginRequest(form)
  console.log('Async action')
  console.log(result)

  return dispatch(loggedIn())
}

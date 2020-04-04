import { LoggedInActionType, LOGGEDIN } from './types'
import { AppThunk } from '../index'
import { loginRequest } from '../../domain/login'

interface LoginForm {
  email: string
  password: string
}

const loggedIn = (): LoggedInActionType => ({
  type: LOGGEDIN,
})

export const login = (form: LoginForm): AppThunk => async dispatch => {
  const result = await loginRequest(form)
  console.log('Async action')
  console.log(result)

  return dispatch(loggedIn())
}

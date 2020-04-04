import axios from 'axios'
import { LoggedInActionType, LOGGEDIN } from './types'
import { AppThunk } from '../index'

interface LoginForm {
  email: string
  password: string
}

const loginRequest = (form: LoginForm) => axios.post('/sign-in', form)

const loggedIn = (): LoggedInActionType => ({
  type: LOGGEDIN,
})

export const login = (payload: LoginForm): AppThunk => async dispatch => {
  try {
    const result = await loginRequest(payload)
    console.log('Async action')
    console.log(result)
  } catch (error) {
    console.log('Error', error)
  }

  return dispatch(loggedIn())
}

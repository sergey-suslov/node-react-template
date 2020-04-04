import { initialState as login } from './login'
import { LoginState } from './login/types'
import { reducer as loginReducer } from './login/reducer'

export interface State {
  login: LoginState
}

export const initialState: State = {
  login,
}

export const mainReducer = (state: State, action: any) => {
  const { login } = state

  const currentState = {
    login: loginReducer(login, action),
  }

  return currentState
}

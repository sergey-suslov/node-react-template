export const LOGIN = '@login/LOGIN'
export const LOGGEDIN = '@login/LOGGEDIN'

interface LoginAction {
  type: typeof LOGIN
  payload: { email: string; password: string }
}

interface LoggedInAction {
  type: typeof LOGGEDIN
}

export type LoginActionType = LoginAction
export type LoggedInActionType = LoggedInAction

export interface LoginState {
  isFetching: boolean
}

import { initialState } from '.'
import { LoginState, LOGIN, LoginActionType } from './types'

export const reducer = (state = initialState, action: LoginActionType): LoginState => {
  switch (action.type) {
    case LOGIN:
      return {
        isFetching: true,
      }
    default:
      return state
  }
}

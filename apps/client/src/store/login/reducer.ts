import { LoginActionType, LoginState, LOGIN } from './types'

const initialState: LoginState = {
  isFetching: false,
}

export function todoReducer(state = initialState, action: LoginActionType): LoginState {
  switch (action.type) {
    case LOGIN:
      return {
        isFetching: true,
      }
    default:
      return state
  }
}

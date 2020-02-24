import { TodoState, TodoActionType, ADD_TODO } from './types'

const initialState: TodoState = {
  todos: [],
}

export function todoReducer(state = initialState, action: TodoActionType): TodoState {
  switch (action.type) {
    case ADD_TODO:
      return {
        todos: [action.payload, ...state.todos],
      }
    default:
      return state
  }
}

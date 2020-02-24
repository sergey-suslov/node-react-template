export const ADD_TODO = '@todo/ADD_TODO'

interface AddTodoAction {
  type: typeof ADD_TODO
  payload: string
}

export type TodoActionType = AddTodoAction

export interface TodoState {
  todos: string[]
}

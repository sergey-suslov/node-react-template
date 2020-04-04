import { TodoActionType, ADD_TODO } from './types'

export function addTodo(name: string): TodoActionType {
    return {
        type: ADD_TODO,
        payload: name,
    }
}

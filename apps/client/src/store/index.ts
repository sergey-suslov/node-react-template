import { combineReducers, createStore, applyMiddleware, Action } from 'redux'
import thunk, { ThunkAction } from 'redux-thunk'
import { todoReducer } from './todo/reducer'

const rootReducer = combineReducers({
  todo: todoReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, null, Action<string>>

export default createStore(rootReducer, applyMiddleware(thunk))

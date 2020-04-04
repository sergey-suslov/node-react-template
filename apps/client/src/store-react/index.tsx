import React, { createContext, useContext, useReducer, useCallback } from 'react'
import { State, initialState, mainReducer } from './reducer'
import { DispatchAction, EveryActionResult } from './types'

interface ContextProps {
  state: State
  dispatch: DispatchAction
}

const GlobalStore = createContext({} as ContextProps)

export const useGlobalStore = () => useContext(GlobalStore)

export const asyncer = (dispatch: DispatchAction, state: State) => (action: EveryActionResult) =>
  typeof action === 'function' ? action(dispatch, state) : dispatch(action)

export function Provider({ children }: { children: React.ReactNode }) {
  const [state, dispatchBase] = useReducer(mainReducer, initialState)

  const dispatch = useCallback(asyncer(dispatchBase, state), [])

  return <GlobalStore.Provider value={{ state, dispatch }}>{children}</GlobalStore.Provider>
}

export type AppDespatcher = (dispatch: DispatchAction, state: State) => void

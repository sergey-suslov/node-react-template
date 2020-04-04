import { Dispatch } from 'react'
import { LoggedIn, Login } from './login/actions'

export type EveryAction = Login | LoggedIn
export type EveryActionResult = ReturnType<Login> | ReturnType<LoggedIn>

export type DispatchAction = Dispatch<EveryActionResult>

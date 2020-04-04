import React from 'react'
import { Switch, Route, useRouteMatch } from 'react-router-dom'
import SignIn from '../components/sign-in'

const Public: React.FC = () => {
  const match = useRouteMatch()
  return (
    <Switch>
      <Route path={`${match.url}sign-in`}>
        <SignIn />
      </Route>
    </Switch>
  )
}

export default Public

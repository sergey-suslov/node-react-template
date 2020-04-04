import React, { Suspense } from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

const Public = React.lazy(() => import('./public'))

const Routing: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Suspense fallback={<div>Loading...</div>}>
            <Public />
          </Suspense>
        </Route>
        <Route path="*">404</Route>
      </Switch>
    </Router>
  )
}

export default Routing

import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as ROUTES from './constants/routes';

const Login = lazy(() => import("./pages/login"));

function App() {
  return (
    <Router>
      <Suspense fallback={<p>Loading...</p>}>
        <Switch>
          <Route exact path={ROUTES.LOGIN}>
            <Login />
          </Route>
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;

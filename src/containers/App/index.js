import React, { Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Login from "./Login/LoadAsync";

function App({ match }) {
  return (
    <Suspense fallback={<div className="loading" />}>
      <Switch>
        <Redirect exact from={`${match.url}/`} to={`${match.url}app/login`} />
        <Route
          path={`${match.url}app/login`}
          render={(props) => <Login {...props} />}
        />
        <Redirect to={`${match.url}`} />
      </Switch>
    </Suspense>
  );
}

export default App;

import React, { Suspense } from "react";
import { Route, Switch, withRouter } from "react-router-dom";

import App from "./App";
import Member from "./Member";

function Main() {
  let loginUser = localStorage.getItem("user_id");
  return (
    <Suspense fallback={<div className="loading" />}>
      <Switch>
        {loginUser ? (
          <Route path="/" render={(props) => <Member {...props} />} />
        ) : (
          <Route path="/" render={(props) => <App {...props} />} />
        )}
      </Switch>
    </Suspense>
  );
}

export default withRouter(Main);

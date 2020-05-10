import React, { Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import MainInfo from "./Profile.MainInfo";

function Profile({ match }) {
  return (
    <Suspense fallback={<div className="loading" />}>
      <Switch>
        <Redirect
          exact
          from={`${match.url}`}
          to={`${match.url}profile/main-info`}
        />
        <Route
          path={`${match.url}profile/main-info`}
          render={(props) => <MainInfo {...props} />}
        />
      </Switch>
    </Suspense>
  );
}

export default Profile;

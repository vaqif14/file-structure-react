import React, { Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

// import Profile from "./Profile";

const Landing = ({ history }) => {
  return (
    <div className="d-flex justify-content-around align-item-center">
      <button
        className="btn btn-primary"
        onClick={() => history.push("/member/profile")}
      >
        go to profile
      </button>
      <button
        className="btn btn-primary"
        onClick={() => {
          localStorage.clear();
          history.push("/");
        }}
      >
        logout
      </button>
    </div>
  );
};

function Member({ match }) {
  return (
    <Suspense fallback={<div className="loading" />}>
      <Switch>
        <Redirect exact from={`${match.url}`} to={`${match.url}member/`} />
        <Route
          path={`${match.url}member`}
          render={(props) => <Landing {...props} />}
        />
        {console.log(match.url)}
        <Route
          path={`${match.url}member/profile`}
          render={(props) => <p>Salam</p>}
        />
        <Redirect to={`${match.url}`} />
      </Switch>
    </Suspense>
  );
}

export default Member;

import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import history from "utils/history";
import * as serviceWorker from "./serviceWorker";

import LanguageProvider from "helpers/LanguageProvider";
import configureStore from "./configureStore";
import { translationMessages } from "./i18n";
import "assets/scss/main.scss";
import "./@fake-db";
const initialState = {};
const store = configureStore(initialState, history);
const MOUNT_NODE = document.getElementById("root");

const LazyApp = React.lazy(() => import("containers"));

const MainApp = (messages) => {
  return (
    <Provider store={store}>
      <LanguageProvider messages={messages}>
        <ConnectedRouter history={history}>
          <Suspense fallback={<div className="loading" />}>
            <LazyApp />
          </Suspense>
        </ConnectedRouter>
      </LanguageProvider>
    </Provider>
  );
};

const render = ReactDOM.render(<MainApp />, MOUNT_NODE);

if (module.hot) {
  module.hot.accept(["./i18n", "containers/App"], () => {
    ReactDOM.unmountComponentAtNode(MOUNT_NODE);
    render(translationMessages);
  });
}

serviceWorker.unregister();

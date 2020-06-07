import React, { Suspense, useState } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { IntlProvider } from "react-intl";
import AppLocale from "./translations";
import history from "utils/history";
import * as serviceWorker from "./serviceWorker";
import configureStore from "./configureStore";
import "./@fake-db";

import TopnavDarkSwitch from "layouts/Navs/Topnav.DarkSwitch";

import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const initialState = {};
const store = configureStore(initialState, history);
const MOUNT_NODE = document.getElementById("root");

const LazyApp = React.lazy(() =>
  import(/* webpackChunkName: "main-app" */ "containers")
);

const options = ["az", "en"];
const MainApp = () => {
  const [lang, setLang] = useState("az");
  const currentAppLocale = AppLocale[lang];
  return (
    <Provider store={store}>
      <IntlProvider
        locale={currentAppLocale.locale}
        messages={currentAppLocale.messages}
      >
        <ConnectedRouter history={history}>
          <Suspense fallback={<div className="loading" />}>
            <div className="d-flex justify-content-center col-md-12 align-items-center">
              <Dropdown
                options={options}
                onChange={(a) => setLang(a.value)}
                value={lang}
                placeholder="Select lang"
              />
              <span className='p mr-2 ml-2'>Switch color</span>
              <TopnavDarkSwitch />
            </div>
            <LazyApp />
          </Suspense>
        </ConnectedRouter>
      </IntlProvider>
    </Provider>
  );
};

ReactDOM.render(<MainApp />, MOUNT_NODE);

serviceWorker.unregister();

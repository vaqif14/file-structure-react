import appLocaleData from "react-intl/locale-data/en";
import { en as Login } from "containers/App/Login/lang";

const EnLang = {
  messages: {
    ...Login,
  },
  locale: "en-US",
  data: appLocaleData,
};
export default EnLang;

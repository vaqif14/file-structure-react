import { addLocaleData } from "react-intl";
import enLang from "./entries/en-US";
import azLang from "./entries/az-AZ";

const AppLocale = {
  en: enLang,
  az: azLang,
};
addLocaleData(AppLocale.en.data);
addLocaleData(AppLocale.az.data);

export default AppLocale;

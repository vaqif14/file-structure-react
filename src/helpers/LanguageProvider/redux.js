import { createReducer, createActions } from "reduxsauce";
import { DEFAULT_LOCALE } from "../../i18n";

const { Types, Creators } = createActions({
  changeLocale: ["locale"],
});

export default Creators;

export const INITIAL_STATE = { locale: DEFAULT_LOCALE };

const localeChange = (state, action) => {
  return { ...state, locale: action.locale };
};

const HANDLERS = {
  [Types.CHANGE_LOCALE]: localeChange,
};

export const reducer = createReducer(INITIAL_STATE, HANDLERS);

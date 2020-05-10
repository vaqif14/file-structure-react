import {
  createReducer,
  Types as ReduxSauceTypes,
  createTypes,
} from "reduxsauce";

export const types = createTypes(
  `
  FETCH
  RECEIVE
`,
  { prefix: "BANK_ACCOUNTS_" }
);

const INITIAL_STATE = { data: [] };

const fetchBankAccounts = (state, action) => {
  return {
    ...state,
    data: action.payload,
  };
};

const HANDLERS = {
  [ReduxSauceTypes.DEFAULT]: defaultHandler,
  [types.RECEIVE]: fetchBankAccounts,
};

export const reducer = createReducer(INITIAL_STATE, HANDLERS);

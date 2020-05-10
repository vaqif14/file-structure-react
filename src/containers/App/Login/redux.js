import { createReducer, createActions } from "reduxsauce";

const { Types, Creators } = createActions(
  {
    loginRequest: ["username", "password"],
    loginSuccess: ["username"],
    loginFailure: ["error"],
  },
  {}
);
export default Creators;

const INITIAL_STATE = {
  token: localStorage.getItem("user_id"),
  username: "",
  password: "",
  error: false,
};

const request = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    username: action.username,
    password: action.password,
    error: false,
  };
};

export const success = (state = INITIAL_STATE) => {
  return { ...state, error: false };
};

export const failure = (state = INITIAL_STATE) => {
  return { ...state, error: true };
};

const HANDLERS = {
  [Types.LOGIN_REQUEST]: request,
  [Types.LOGIN_SUCCESS]: success,
  [Types.LOGIN_FAILURE]: failure,
};

export const reducer = createReducer(INITIAL_STATE, HANDLERS);

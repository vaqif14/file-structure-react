import { call, put, apply, takeLatest } from "redux-saga/effects";
import { push } from "connected-react-router";
import { api } from "constants/api";
import ActionCreator from "./redux";

export function* loginUser({ username, password }) {
  const request = yield call(
    api.auth.loginWithEmailPassword,
    username,
    password
  );
  if (request.data.accessToken) {
    yield apply(localStorage, localStorage.setItem, [
      "user_id",
      request.data.accessToken,
    ]);
    yield put(push("/member"));
  }
}

export default function* watchSaga() {
  yield takeLatest(ActionCreator.loginRequest, loginUser);
}

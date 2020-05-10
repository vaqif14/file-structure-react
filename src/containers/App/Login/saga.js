import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import { push } from "connected-react-router";

const loginWithEmailPasswordAsync = async (email, password) =>
  await axios.post("http://localhost:3000/api/authenticate/login/user", {
    email: email,
    password: password,
  });

export function* loginUser({ username, password }) {
  const request = yield call(loginWithEmailPasswordAsync, username, password);
  if (request.data.accessToken) {
    localStorage.setItem("user_id", request.data.accessToken);
    yield put(push("/member"));
  }
}

export default function* watchSaga() {
  yield takeLatest("LOGIN_REQUEST", loginUser);
}

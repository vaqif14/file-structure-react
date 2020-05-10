import { takeLatest, call, put, all } from "redux-saga/effects";
import {types}from './redux'

const asyncRequest =async(url,data)=>ApiCall.post(url,data)

function* fetchBankAccountsFlow({ payload }) {
  try {
    const bankAccounts = yield call(asyncRequest,'/get_profile','data');
    if (!Array.isArray(bankAccounts)) {
      throw new Error({
        message: "Received data is not supported",
        response: bankAccounts,
      });
    }
    yield put({type:types.RECEIVE_BANK_ACCOUNTS,payload(bankAccounts)});
  } catch (err) {
    yield put(pushError(ErrorId.PROFILE_VIEW, err));
  } finally {
    yield put(toggleLoading(false, [LoadingId.PROFILE_VIEW]));
  }
}

export default function* bankAccountsSaga() {
  yield takeLatest(types.FETCH_BANK_ACCOUNTS, fetchBankAccountsFlow);
}

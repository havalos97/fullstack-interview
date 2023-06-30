import { takeEvery } from "redux-saga/effects";
import { FETCH_KEANU_REQUEST } from "./keanu/actionTypes";
import keanuSaga from "./keanu/sagas";

export function* rootSaga() {
  yield takeEvery(FETCH_KEANU_REQUEST, keanuSaga);
}
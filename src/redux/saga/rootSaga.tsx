import { all, fork } from "redux-saga/effects";
import permitsSaga from "./permitSaga";

export function* rootSaga() {
  yield all([fork(permitsSaga)]);
}
import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { Permit } from "../../interfaces/Permit";
import {
  fetchPermitsFailure,
  fetchPermitsSuccess,
} from "../actions/permitAction";
import { permitTypes } from "../actionType/actionType";

const fetchPermits = () =>
  axios.get<Permit[]>(
    "https://data.cityofchicago.org/resource/ydr8-5enu.json",
    {
      data: {
        limit: 10,
        app_token: "XgUNUllSZ6HQsz68ee9nXFFVA",
      },
    }
  );

function* fetchPermitsSaga() {
  try {
    //@ts-ignore
    const response = yield call(fetchPermits);
    yield put(
      fetchPermitsSuccess({
        permits: response.data,
      })
    );
  } catch (e) {
    yield put(
      fetchPermitsFailure({
        //@ts-ignore
        error: e.message,
      })
    );
  }
}

function* permitsSaga() {
  yield all([takeLatest(permitTypes.GET_PERMIT_REQUEST, fetchPermitsSaga)]);
}

export default permitsSaga;
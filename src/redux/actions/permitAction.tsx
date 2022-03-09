import { permitTypes } from "../actionType/actionType";
import {
  FetchPermitsFailure,
  FetchPermitsFailurePayload,
  FetchPermitsRequest,
  FetchPermitsSuccess,
  FetchPermitsSuccessPayload,
} from "../types/type";

export const fetchPermitsRequest = (): FetchPermitsRequest => ({
  type: permitTypes.GET_PERMIT_REQUEST,
});

export const fetchPermitsSuccess = (
  payload: FetchPermitsSuccessPayload
): FetchPermitsSuccess => ({
  type: permitTypes.GET_PERMIT_SUCCESS,
  payload,
});

export const fetchPermitsFailure = (
  payload: FetchPermitsFailurePayload
): FetchPermitsFailure => ({
  type: permitTypes.GET_PERMIT_FAILURE,
  payload,
});
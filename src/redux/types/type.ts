import { Permit } from "../../interfaces/Permit";
import { permitTypes } from "../actionType/actionType";

export interface PermitsState {
  pending: boolean;
  permits: Permit[];
  error: string | null;
}

export interface FetchPermitsSuccessPayload {
  permits: Permit[];
}

export interface FetchPermitsFailurePayload {
  error: string;
}

export interface FetchPermitsRequest {
  type: typeof permitTypes.GET_PERMIT_REQUEST;
}

export type FetchPermitsSuccess = {
  type: typeof permitTypes.GET_PERMIT_SUCCESS;
  payload: FetchPermitsSuccessPayload;
};

export type FetchPermitsFailure = {
  type: typeof permitTypes.GET_PERMIT_FAILURE;
  payload: FetchPermitsFailurePayload;
};

export type PermitsActions =
  | FetchPermitsRequest
  | FetchPermitsSuccess
  | FetchPermitsFailure;
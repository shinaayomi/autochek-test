import { permitTypes } from "../actionType/actionType";
import { PermitsActions, PermitsState } from "../types/type";

const initialState: PermitsState = {
  pending: false,
  permits: [],
  error: null,
};

const permitReducer = (state = initialState, action: PermitsActions) => {
  switch (action.type) {
    case permitTypes.GET_PERMIT_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case permitTypes.GET_PERMIT_SUCCESS:
      return {
        ...state,
        pending: false,
        permits: action.payload.permits,
        error: null,
      };
    case permitTypes.GET_PERMIT_FAILURE:
      return {
        ...state,
        pending: false,
        permits: "",
        error: action.payload.error,
      };
    default:
      return {
        ...state,
      };
  }
};

export default permitReducer;
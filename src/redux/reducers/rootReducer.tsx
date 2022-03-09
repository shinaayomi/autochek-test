import { combineReducers } from "redux";
import permitReducer from "./permitReducer";

const rootReducer = combineReducers({
  permits: permitReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
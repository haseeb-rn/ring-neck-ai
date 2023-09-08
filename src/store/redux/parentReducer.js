import { combineReducers } from "redux";

import { modelReducer } from "./slices/helperSlices/modelSlice";

const parentReducer = combineReducers({
  model: modelReducer,
});

export default parentReducer;

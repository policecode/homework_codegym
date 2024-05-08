import { combineReducers } from "redux";
import authReducer from "./authSlice";
import loadReducer from "./loadingSlice";
const rootReducer = combineReducers({
  auth: authReducer,
  loading: loadReducer
});

export default rootReducer;
import { LOGIN, LOGOUT } from "./constant";
import LocalStorageHelper from "../utils/LocalStorageHelper";
const initState = LocalStorageHelper.getStorage("authentication", {});
const authReducer = (state = initState, action) => {
  switch (action.type) {
    case LOGIN:
      LocalStorageHelper.setStorage("authentication", action.payload);
      return action.payload;
    case LOGOUT:
      LocalStorageHelper.setStorage("authentication", {});
      return {};
    default:
        return state
  }
};

export default authReducer;

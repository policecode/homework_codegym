import { LOGIN, LOGOUT } from "./constant";
import LocalStorageHelper from "../utils/LocalStorageHelper";

export const initStateAuth = LocalStorageHelper.getStorage('authentication', {});
const reducerAuth = (state, action) => {
    switch (action.type) {
      case LOGIN:
        LocalStorageHelper.setStorage('authentication', action.user);
        return action.user;
      case LOGOUT:
        LocalStorageHelper.setStorage('authentication', {});
        return  {};
      default:
        break;
    }
  }

  export default reducerAuth;
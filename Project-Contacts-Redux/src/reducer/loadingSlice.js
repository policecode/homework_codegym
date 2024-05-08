import { LOADINGSHOW, LOADINGHIDEN } from "./constant";
const initState = false;
const loadReducer = (state = initState, action) => {
  switch (action.type) {
    case LOADINGSHOW:
      return true;
    case LOADINGHIDEN:
      return false;
    default:
        return state
  }
};

export default loadReducer;

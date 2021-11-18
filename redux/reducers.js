import { combineReducers } from "redux";
import Type from "./types";

// INITIAL TIMER STATE
const INITIAL_SITE_STATE = {
  user: "null",
};

// COUNTER REDUCER
const siteReducer = (state = INITIAL_SITE_STATE, action) => {
  switch (action.type) {
    case Type.SET_USER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

// INITIAL TIMER STATE
const INITIAL_OTHER_STATE = {
  user2: "null",
};

// COUNTER REDUCER
const otherReducer = (state = INITIAL_OTHER_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};


const rootReducer = combineReducers({
  site : siteReducer,
  other : otherReducer
})

export default rootReducer;
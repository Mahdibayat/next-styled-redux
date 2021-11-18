import { combineReducers } from "redux";
import Type from "./types";

// INITIAL TIMER STATE
const INITIAL_STATE = {
  user: null,
};

// COUNTER REDUCER
const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Type.SET_USER:
      return { ...state, smallMenu: action.payload };
    default:
      return state;
  }
};

export default reducer;

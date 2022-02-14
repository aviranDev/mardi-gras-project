import { actionTypes } from "./userType";

const INITIAL_STATE = {
  user_data: {},
}

export const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    /**
     * USER
     */

    //DISPLAY USER PROFILE DETAILS
    case actionTypes.DISPLAY_USER_DETAILS:
      return { ...state, user_data: action.payload }

    default:
      return state;
  }
}
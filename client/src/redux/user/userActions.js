import { actionTypes } from "./userType";
import userService from '../../services/userService';

/**
 * DISPLAY USER DETAILS
 */
export const displayUserDetails = () => async (dispatch) => {
  const response = await userService.getUserProfile();
  dispatch({ type: actionTypes.DISPLAY_USER_DETAILS, payload: response.data })
}


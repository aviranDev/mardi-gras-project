import { actionTypes } from '../types/types';
import cardService from '../../../services/cardService';

/**
 * CREATE CARD
 */
export const generateCardProduction = (body) => async (dispatch) => {
  const response = await cardService.createCard(body);
  dispatch({ type: actionTypes.CREATE_CARD, payload: response.data })
};


/**
 * DIPLAY USER CARD
 */
export const displayUserShop = () => async (dispatch) => {
  const response = await cardService.getMyCards();
  dispatch({ type: actionTypes.DISPLAY_USER_CARD, payload: response.data })
};

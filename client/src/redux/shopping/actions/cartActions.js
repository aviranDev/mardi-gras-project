import { actionTypes } from '../types/types';
import cartService from '../../../services/cartService';


/**
 * DISPLAY CART ITEMS IN CART LIST 
 */
export const setItemsToCart = () => async (dispatch) => {
  const response = await cartService.displayCartItems();
  dispatch({ type: actionTypes.SET_ITEMS_TO_CART, payload: response.data })
};

/**
 * ADD PRODUCT TO CART 
 */
export const addToCart = (id) => async (dispatch) => {
  const response = await cartService.addToCart(id);
  dispatch({ type: actionTypes.ADD_TO_CART, payload: response.data })
};


/**
 * REMOVE ITEM FROM CART
 */
export const removeFromCart = (id) => async (dispatch) => {
  const response = await cartService.deleteItemFromCart(id);
  dispatch({ type: actionTypes.REMOVE_FROM_CART, payload: response.data })
};


/**
 * REDUCE ITEM QTY BY 1
 */
export const reduceItem = (id) => async (dispatch) => {
  const response = await cartService.reduceItemByOne(id);
  dispatch({ type: actionTypes.REDUCE_ITEM, payload: response.data })
};


/**
 * INCREMENT ITEM QTY BY 1
 */
export const incrementItem = (id) => async (dispatch) => {
  const response = await cartService.incrementItemByOne(id);
  dispatch({ type: actionTypes.INCREMENT_ITEM, payload: response.data })
};

/**
 * CHECKOUT-PAYMENT
 * USER MUST BE LOGED IN
 * POST REQUEST
 */
export const checkoutUserPayment = (body) => async (dispatch) => {
  const response = await cartService.checkoutPayment(body);
  dispatch({ type: actionTypes.CHECKOUT_USER_PAYMENT, payload: response.data })
}
















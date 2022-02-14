import { actionTypes } from '../types/types';
import productService from "../../../services/productService";
import cardService from "../../../services/cardService";


/**
 * DISPLAY LIST OF SELLERS PRODUCTS
 */
export const setProducts = () => async (dispatch) => {
  const response = await productService.getAllProducts();
  dispatch({ type: actionTypes.SET_PRODUCTS, payload: response.data })
};


/**
 * DISPLAY SELLER ONE PRODUCT 
 */
export const selectedProduct = (id) => async (dispatch) => {
  const response = await productService.getProductById(id);
  dispatch({ type: actionTypes.SELECTED_PRODUCT, payload: response.data })
};


/**
 * DISPLAY SELLER MULTIPLE PRODUCTS
 */
export const setBusinessUserProducts = (user_id) => async (dispatch) => {
  const response = await productService.getUserProducts(user_id);
  dispatch({ type: actionTypes.SET_BUSINESS_USER_PRODUCTS, payload: response.data })
};

/**
 * DISPLAY SELLER NAME IN SELLER'S STORE PAGE
 */
export const getSellerDetails = (id) => async (dispatch) => {
  const response = await cardService.getCardById(id);
  dispatch({ type: actionTypes.GET_SELLER_DETAILS, payload: response.data })
};

/**
 * CREATE PRODUCT
 */
export const createProductAction = (body) => async (dispatch) => {
  const response = await productService.createProduct(body);
  dispatch({ type: actionTypes.CREATE_PRODUCT, payload: response.data })
}


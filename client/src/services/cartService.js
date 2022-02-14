import httpService from "./httpService";
import configData from "../config.json";


/**
 * DISPLAY CART ITEMS
 * @returns CART LIST ITEMS 
 */
export function displayCartItems() {
  return httpService.get(`${configData.apiUrl}/cart/shopping-cart`, { withCredentials: true });
}

/**
 * ADD PRODUCT (ITEM) TO CART
 * @param {PRODUCT_ID} id 
 * @returns PRODUCT ADDED TO CART SESSION 
 */
export function addToCart(id) {
  return httpService.get(`${configData.apiUrl}/cart/add-to-cart/${id}`, { withCredentials: true });
}

/**
 * REDUCE ITEM QTY BY ONE
 * @param {ITEM_ID} id 
 * @returns ITEM'S QTY REDUCED BY 1
 */
export function reduceItemByOne(id) {
  return httpService.get(`${configData.apiUrl}/cart/reduce-cart-item/${id}`, { withCredentials: true });
}

/**
 * INCREMENT ITEM QTY BY 1
 * @param {ITEM_ID} id 
 * @returns ITEM'S QTY INCREMENTED BY 1
 */
export function incrementItemByOne(id) {
  return httpService.get(`${configData.apiUrl}/cart/increment-cart-item/${id}`, { withCredentials: true });
}

/**
 * REMOVE CART'S ITEM FROM CART SESSION
 * @param {ITEM_ID} id 
 * @returns REMOVED CART'S ITEM
 */
export function deleteItemFromCart(id) {
  return httpService.delete(`${configData.apiUrl}/cart/delete-product-from-cart/${id}`, { withCredentials: true });
}

/**
 * CHECKOUT PAYMENT PRODUCTS IN CART CHECKOUT WITH STRIPE GETWAY
 */
export function checkoutPayment({ _id, body }) {
  return httpService.post(`${configData.apiUrl}/cart/checkout-payment`, { _id, body }, { withCredentials: true })
}



const cartService = {
  addToCart,
  displayCartItems,
  reduceItemByOne,
  incrementItemByOne,
  deleteItemFromCart,
  checkoutPayment,
}

export default cartService;
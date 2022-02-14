import { actionTypes } from '../types/types';


const INITIAL_STATE = {
  products: [], //{_id, imagePath, title, qty, price}, qty, price
  cart: [],
  currentItem: null,
  product: {},
  card: {},
  seller_products: [],
}

export const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    /**
     * CART
     */

    //DISPLAY CART ITEMS IN CART
    case actionTypes.SET_ITEMS_TO_CART:
      return { ...state, cart: action.payload }

    //Add ITEM TO CART
    case actionTypes.ADD_TO_CART:
      return { ...state, cart: action.payload }

    //REMOVE ITEM FROM CART   
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state, cart: action.payload,
      }

    //INCREMENT QTY OF ITEM IN CART
    case actionTypes.INCREMENT_ITEM:
      return {
        ...state, cart: action.payload
      }

    //REDUCE QTY OF ITEM IN CART  
    case actionTypes.REDUCE_ITEM:
      return {
        ...state, cart: action.payload
      }

    //CHECKOUT USER PAYMENT
    case actionTypes.CHECKOUT_USER_PAYMENT:
      return {
        ...state, cart: action.payload
      }


    /**
     * PRODUCTS
     */
    //DISPLAY PRODUCTS IN PRODUCTS SECTION  
    case actionTypes.SET_PRODUCTS:
      return { ...state, products: action.payload }

    //DISPLAY SELLER'S PRODUCTS
    case actionTypes.SET_BUSINESS_USER_PRODUCTS:
      return { ...state, seller_products: action.payload }

    //DISPLAY SELLER'S DETAILS
    case actionTypes.GET_SELLER_DETAILS:
      return { ...state, seller_products: action.payload }

    //DISPLAY ONE SELLER PRODUCT BY ID
    case actionTypes.SELECTED_PRODUCT:
      return { ...state, product: action.payload }

    case actionTypes.CREATE_PRODUCT:
      return { ...state, products: action.payload }

    /**
     * CARD
     */
    //GENERATE SHOP CARD
    case actionTypes.CREATE_CARD:
      return { ...state, card: action.payload }

    //DISPLAY USER SHOP CARDS
    case actionTypes.DISPLAY_USER_CARD:
      return { ...state, card: action.payload }

    default:
      return state;
  }
}






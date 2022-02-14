import { combineReducers } from 'redux'
import { shopReducer } from '../shopping/shopReducers/shopReducer';
import { userReducer } from '../user/userReducer';


const rootReducer = combineReducers({
  shop: shopReducer,
  user: userReducer,
})

export default rootReducer;
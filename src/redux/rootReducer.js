import { combineReducers } from "redux";
import productReducer from "./products/productReducer";
import cartReducer from "./cart/cartReducer";

const roortReducer = combineReducers({
    product: productReducer,
    cart: cartReducer,


})
export default roortReducer;
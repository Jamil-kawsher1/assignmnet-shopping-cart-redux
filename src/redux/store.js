import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import productReducer from "./products/productReducer";


const store = createStore(productReducer, applyMiddleware(logger));
export default store;
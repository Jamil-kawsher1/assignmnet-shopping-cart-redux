import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import roortReducer from "./rootReducer";


const store = createStore(roortReducer, applyMiddleware(logger));
export default store;
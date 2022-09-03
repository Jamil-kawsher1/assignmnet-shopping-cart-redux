import { useSelector } from "react-redux";
import { INCREMENT } from "./actiontype";
import { DECREMENT } from "./actiontype";
import store from "../store";
const cart = []

export const cartReducer = (state = cart, action) => {

    switch (action.type) {
        case INCREMENT:
            // console.log(state)
            // console.log("Incremnet from cart reducer clicked");
            // Great Item data from products array
            // console.log(state.product)
            // console.log(action.payload.id)


            let doesItemExist = false;
            const newState = state.map((item) => {
                if (item.id === action.payload.id) {
                    item.quantity += 1;
                    doesItemExist = true;
                }
                return item;
            });
            if (doesItemExist) {
                return newState;
            }
            return [...state, { ...action.payload, quantity: 1 }];




















        // const itemincart = state.find(item => item.id === action.payload.id);
        // let checking = true
        // if (itemincart.length() < 1) {
        //     checking = false
        // }
        // if (checking) {

        //     return {
        //         ...itemincart,
        //         quantity: itemincart.quantity + 1,

        //     }
        // }
        // else {
        //     return [

        //         ...state,
        //         {
        //             id: action.payload.id,
        //             title: action.payload.title,
        //             quantity: 1,
        //             price: action.payload.price,
        //         }
        //     ]

        // }
        case DECREMENT:
            const decrement = state.map(cartitem => {
                if (cartitem.id === action.payload.id) {
                    return {
                        ...cartitem,
                        quantity: cartitem.quantity - 1,
                    }
                }
            })
            return decrement
        default:
            return state
    }


}
export default cartReducer;
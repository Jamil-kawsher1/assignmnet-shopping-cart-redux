import { INCREMENT } from "./actiontype";
import { DECREMENT } from "./actiontype";

const cart = []

export const cartReducer = (state = cart, action) => {
    switch (action.type) {
        case INCREMENT:

            const itemincart = state.cart.find(item => item.id === action.payload.id);
            if (itemincart) {

                itemincart.quantity++
            }
            else {
                state.product.map(product => {
                    if (product.id === action.payload.id) {
                        return [
                            ...state.cart,
                            {

                                ...product,
                                quantity: 1
                            }


                        ]
                    }
                })

            }
        case DECREMENT:
            const decrement = state.cart.map(cartitem => {
                if (cartitem.id == action.payload.id) {
                    return {
                        ...cartitem,
                        quantity: cartitem.quantity - 1,
                    }
                }
            })
        default:
            return state.cart
    }


}
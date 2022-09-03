//actions

import { DECREMENT, INCREMENT } from "./actiontype"

export const IncrementCartAction = (id, title, quantity, price) => {

    return {

        type: INCREMENT,
        payload: {
            id: id,
            title: title,
            quantity: quantity,
            price: price
        }
    }


}
export const DecrementCartAction = (id) => {

    return {

        type: DECREMENT,
        payload: {
            id: id
        }
    }


}
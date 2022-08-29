//actions

import { DECREMENT, INCREMENT } from "./actiontype"

export const IncrementProductAction = (id) => {

    return {

        type: INCREMENT,
        payload: {
            id: id
        }
    }


}
export const DecrementProductAction = (id) => {

    return {

        type: DECREMENT,
        payload: {
            id: id
        }
    }


}
import INCREMENT from '../../redux/products/actiontype';
import DECREMENT from '../../redux/products/actiontype';

const InitialState = [


    {

        id: 1,
        title: "Asus Vivobook X515MA",
        quantity: 8,
        price: 35500
    },

    {

        id: 2,
        title: "Dell E191HV 18.5 inch",
        quantity: 5,
        price: 9300
    },
    {

        id: 3,
        title: "Cannon Eos 4000D 18MP",
        quantity: 6,
        price: 36500
    },
]

export const productReducer = (state = InitialState, action) => {
    const { id } = action.payload
    if (action.type === INCREMENT) {


        state.map(product => {
            if (product.id === id) {
                return {
                    ...product,
                    quantity: product.quantity + 1
                }
            }

        })
    }
    if (action.type === DECREMENT) {


        state.map(product => {
            if (product.id === id) {
                return {
                    ...product,
                    quantity: product.quantity - 1
                }
            }
        })
    }



}
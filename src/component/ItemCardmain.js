import React from 'react';
import { useDispatch } from 'react-redux';
import { DecrementCartAction, IncrementCartAction } from '../redux/cart/action';
import { DecrementProductAction, IncrementProductAction } from '../redux/products/action';

const ItemCardmain = (props) => {
    const dispatch = useDispatch()
    const { id, title, quantity, price } = props.iteminfo;

    const incremnetHandler = (id) => {
        //this handle
        dispatch(DecrementProductAction(id));
        dispatch(IncrementCartAction(id, title, quantity, price));

    }

    const decremnethandeler = (id) => {
        dispatch(IncrementProductAction(id))
        dispatch(DecrementCartAction(id))

    }
    return (
        <div class="flex justify-between border-b-2 mb-2">
            <div class="text-lg py-2">
                <p>{title}</p>
            </div>
            <div class="text-lg py-2">
                <div class="flex flex-row space-x-2 w-full items-center rounded-lg">
                    <button onClick={() => decremnethandeler(id)}
                        class="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M18 12H6" />
                        </svg>
                    </button>
                    <p>{quantity}</p>
                    <button onClick={() => incremnetHandler(id)}
                        class="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ItemCardmain;
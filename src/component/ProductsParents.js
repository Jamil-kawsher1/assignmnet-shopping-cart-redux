import React from 'react';
import { useSelector } from 'react-redux';
import store from '../redux/store';
import Products from './Products';

const ProductsParents = () => {
    const state = store.getState();
    console.log(state)
    return (
        <>
            {state.map((item, index) => <Products key={index} info={item} />)}


        </>


    );
};

export default ProductsParents;
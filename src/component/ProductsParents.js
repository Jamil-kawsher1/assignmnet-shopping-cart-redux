import React from 'react';
import { useSelector } from 'react-redux';
import store from '../redux/store';
import Products from './Products';

const ProductsParents = () => {
    // const state = store.getState();
    const product = useSelector((state) => state.product);
    const allproduct = useSelector((state) => state.cart)
    console.log(allproduct)
    return (
        <>
            {product.map((item, index) => <Products key={index} info={item} />)}


        </>


    );
};

export default ProductsParents;
import React from 'react';
import ItemCard from './ItemCard';
import Products from './Products';
import ProductsParents from './ProductsParents';
import TotalItem from './TotalItem';
import TotalPrice from './TotalPrice';

const CartParents = () => {
    return (
        <div class="bg-gray-50 h-full md:h-screen">
            <div class="grid place-items-center">
                <h1
                    class="text-gray-900 font-bold text-3xl p-10 underline decoration-purple-500 decoration-4 underline-offset-8 mb-4">
                    Shopping Cart
                </h1>
            </div>
            <div class="grid grid-cols-12 gap-6">


                <ProductsParents />


                {/* ///grid */}
                <div class="col-span-12 sm:col-span-12 md:col-span-5 lg:col-span-4 xxl:col-span-4">
                    {/* //CARD  parent*/}
                    <div class="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4">

                        {/* 
              singlee item of card */}
                        <ItemCard />

                        {/* //total item */}
                        <TotalItem />

                    </div>
                    {/* //total Price will be here */}
                    <TotalPrice />
                </div>
            </div>
        </div>
    );
};

export default CartParents;
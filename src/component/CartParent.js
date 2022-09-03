import React from 'react';
import { useSelector } from 'react-redux';
import ItemCardmain from './ItemCardmain';
import SingleProduct from './SingleProduct';
import TotalItem from './TotalItem';
import TotalPrice from './TotalPrice';
const CartParent = () => {
    const product = useSelector((state) => state.product);
    const itemsOfCard = useSelector((state) => state.cart);
    return (
        <div class="bg-gray-50 h-full md:h-screen">
            <div class="grid place-items-center">
                <h1
                    class="text-gray-900 font-bold text-3xl p-10 underline decoration-purple-500 decoration-4 underline-offset-8 mb-4">
                    Shopping Cart
                </h1>
            </div>
            <div class="grid grid-cols-12 gap-6">
                <div class="col-span-12 sm:col-span-12 md:col-span-7 lg:col-span-8 xxl:col-span-8">

                    {/* all product will be here */}

                    {product.map((item, index) => <SingleProduct key={index} info={item} />)}

                </div>

                {/* single products end here */}
                <div class="col-span-12 sm:col-span-12 md:col-span-5 lg:col-span-4 xxl:col-span-4">
                    <div class="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4">

                        {/* Itemcard will he here */}
                        {itemsOfCard.map(cardItem => <ItemCardmain iteminfo={cardItem} />)}
                        {/* 
                       TotalItem will be here */}
                        <TotalItem />

                    </div>

                    {/* total price will be here */}
                    <div class="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4">
                        <TotalPrice />
                    </div>

                </div>
            </div>
        </div>

    );
};

export default CartParent;
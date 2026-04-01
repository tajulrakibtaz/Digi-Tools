import React from 'react';
import nav from '../assets/products/shopping-cart.png'
const Nothing = () => {
    return (
        <div className='border p-6'>
            <h1>Your Card</h1>
            <div className='border p-5 '>
                <img className='mx-auto h-[200px] w-[200px]' src={nav} alt="" />
                <div className='flex justify-center'>Your Cart is Empty</div>
            </div>
        </div>
    );
};

export default Nothing;
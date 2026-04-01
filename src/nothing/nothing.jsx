import React from 'react';
import { CiShoppingCart } from "react-icons/ci";
const Nothing = () => {
    return (
        <div className=' shadow shadow-amber-50 p-6'>
            <h1 className='font-bold text-4xl'>Your Card</h1>
            <div className='shadow shadow-amber-300 p-5 '>
              
                <div ><CiShoppingCart className='mx-auto h-[200px] w-[200px]'></CiShoppingCart></div>
                <div className='flex justify-center'>Your Cart is Empty</div>
            </div>
        </div>
    );
};

export default Nothing;
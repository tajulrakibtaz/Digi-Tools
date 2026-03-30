import React from 'react';

const Navbar = () => {
    return (
        <div className='flex justify-between max-w-[1200px] mx-auto'>
            <h1 class=" text-[40px] font-bold
bg-gradient-to-b from-indigo-600 to-purple-500 
bg-clip-text text-transparent">
  DigiTools
</h1>
            <div className='flex gap-3 items-center'>
                <p className='font-semibold text-[16px]'>Features</p>
                <p className='font-semibold text-[16px]'>Pricing</p>
                <p className='font-semibold text-[16px]'>Testimonials</p>
                <p className='font-semibold text-[16px]'>FAQ</p>
            </div>
            <div className='flex items-center'>
                <button className='mr-2 font-semibold text-[16px]'>Login</button>
                <button className='font-semibold text-[16px] px-[16px] py-[12px] text-white rounded-full 
bg-gradient-to-r from-blue-500 to-purple-500 '>Get Started</button>
            </div>
        </div>
    );
};

export default Navbar;
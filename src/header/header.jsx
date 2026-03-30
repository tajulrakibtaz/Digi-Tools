import React from 'react';
import banner from '../assets/products/banner.png'
const Header = () => {
    return (
        <div className='flex  gap-6 my-[85px] max-w-[1200px] mx-auto'>
            <div className=' items-center'>
                <button className='text-[16px] text-purple-500 px-5 rounded-xl bg-blue-100'>
                    New: AI-Powered Tools Available
                </button>
                <h1 className='font-extrabold text-[72px]' >
                    Supercharge Your <br/> Digital Workflow
                </h1>
                <p className='text-[18px] text-gray-500'>Access premium AI tools, design assets, templates, and productivity <br />
                    software—all in one place. Start creating faster today.

                    Explore Products
                </p>
                <div className='flex gap-4'>
                    <button className='font-semibold text-[16px] px-[16px] py-[12px] text-white rounded-full 
bg-gradient-to-r from-blue-500 to-purple-500'>    Explore Products
                    </button>
                    <button className='font-semibold text-[16px] px-[16px] py-[12px]  rounded-full 
border border-purple-500 bg-gradient-to-b from-indigo-600 to-purple-500 
bg-clip-text text-transparent'>     Watch Demo
                    </button>
                </div>





            </div>
            <div>
<img src={banner} alt="" />
            </div>
        </div>
    );
};

export default Header;
import React from 'react';
import img from '../assets/products/user.png'
const Steps = () => {
    return (
        <div className='max-w-[1200px] mx-auto my-[120px]'>
            <div className='max-w-[1200px] mx-auto text-center'>
<h1 className='text-[48px] font-extrabold'>Get Started in 3 Steps</h1>
<p className='text-[16px]'>Start using premium digital tools in minutes, not hours.</p>
            </div>
            <div className='flex justify-between'>
<div className='border max-w-[380px]'>
<div>01</div>
<div>
    <img src={img} alt="" />
</div>
<h1>Create Account</h1>
<p>Sign up for free in seconds. No credit card <br /> required to get started.</p>
</div>
<div className='border max-w-[380px]'>
<div>01</div>
<div>
    <img src={img} alt="" />
</div>
<h1>Create Account</h1>
<p>Sign up for free in seconds. No credit card <br /> required to get started.</p>
</div>
<div className='border max-w-[380px]'>
<div>01</div>
<div>
    <img src={img} alt="" />
</div>
<h1>Create Account</h1>
<p>Sign up for free in seconds. No credit card <br /> required to get started.</p>
</div>
            </div>
        </div>
    );
};

export default Steps;
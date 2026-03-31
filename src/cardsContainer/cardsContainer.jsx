import React, { Suspense } from 'react';
import Cards from '../cards/cards';
const loadData = async() =>{
 const res = await fetch("/data.json");
 return res.json();
}

const CardsContainer = () => {
    const fetchCards =loadData();
    return (
        <div className='max-w-[1200px] mx-auto'>
            <div className='text-center'>
            <button className='px-6 py-2 text-white 
bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-3xl mr-2 '>Products</button>
            <button className='px-6 py-2 border rounded-3xl'>Cart</button>
            </div>
<div>
<Suspense fallback={'loading....'}>
        <Cards fetchCards={fetchCards}></Cards>
</Suspense>
</div>





        </div>

    );
};

export default CardsContainer;
import React, { Suspense, useState } from 'react';
import Cards from '../cards/cards';
import Carts from '../carts/carts';

const loadData = async() =>{
 const res = await fetch("/data.json");
 return res.json();
}

const CardsContainer = () => {
    const fetchCards =loadData();
    const [click,setclick]=useState('Products');
const [selectCard, setSelectedCard]=useState([]);

    return (
        <div className='max-w-[1200px] mx-auto'>
        

            <div className='text-center'>
            <button onClick={()=>setclick("Products")} className={`px-6 py-2

${click === 'Products' ? "text-white bg-gradient-to-r from-blue-500 to-purple-500" : "border"}




rounded-3xl mr-2`}>Products</button>
            <button onClick={()=>setclick("Cart")}  className={`px-6 py-2 border rounded-3xl ${click === 'Cart' ? "text-white bg-gradient-to-r from-blue-500 to-purple-500":"border"}`}>Cart({selectCard.length})</button>
            </div>
<div>

{
    click==='Products' && (
        <Suspense fallback={'loading....'}>
        <Cards setSelectedCard={setSelectedCard} selectCard={selectCard} fetchCards={fetchCards}></Cards>
</Suspense>
    )
}
{
    click==='Cart' && (
        <Suspense fallback={'loading....'}>
        <Carts setSelectedCard={setSelectedCard} selectCard={selectCard} ></Carts>
</Suspense>
    )
}


</div>





        </div>

    );
};

export default CardsContainer;
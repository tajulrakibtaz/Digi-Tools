import React from 'react';
import SDetails from '../sDetails/sDetails';
const Carts = ({selectCard}) => {
    console.log(selectCard);
    const total = selectCard.reduce((sum, item) => sum + item.price, 0);
    return (
        <div>
           <div className="mt-8 p-6 border rounded-xl">
  <h1 className="text-xl font-bold mb-4">Your Cart</h1>

  {selectCard.map((info, id) => (
    <SDetails 
      key={id} 
      info={info} 
      onRemove={() => handleRemove(id)} 
    />
  ))}

  <div className="flex justify-between mt-4 font-semibold">
    <span>Total:</span>
    <span>${total}</span>
  </div>

  <button className="w-full mt-4 py-3 rounded-3xl text-white bg-gradient-to-r from-blue-500 to-purple-500">
    Proceed To Checkout
  </button>
</div>
        </div>
    );
};

export default Carts;
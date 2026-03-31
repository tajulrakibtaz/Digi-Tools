import React, { use } from 'react';
import Card from '../card/card';
const Cards = ({fetchCards}) => {
    const useHook = use(fetchCards);
    console.log(useHook);
    return (
        <div className='grid grid-cols-3 gap-3'>
            
            {
                useHook.map(res=><Card res={res}></Card>)
            }
        </div>
        
       
    );
};

export default Cards;
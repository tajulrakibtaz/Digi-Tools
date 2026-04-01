// tailwind 
// daisy ui
import Navbar from './navbar/navbar';
import React, { useState } from 'react';
import Header from './header/header';
import Ratings from './ratings/ratings';
import Details from './details/details';
import Steps from './steps/steps';
import Pricing from './pricing/pricing';
import Ready from './ready/ready';
import { ToastContainer} from 'react-toastify';
import Footer from './footer/footer';

import CardsContainer from './cardsContainer/cardsContainer';
const App = () => {
  const [selectCard, setSelectedCard]=useState([])
  return (
    <div className='space-y-5 mt-4'>
    <Navbar selectCard={selectCard} setSelectedCard={setSelectedCard}></Navbar>
    <Header></Header>
    <Ratings></Ratings>
    <Details></Details>
    <CardsContainer selectCard={selectCard} setSelectedCard={setSelectedCard}></CardsContainer>

<Steps ></Steps>
<Pricing></Pricing>
<Ready></Ready>
<Footer></Footer>
<ToastContainer></ToastContainer>


    </div>
    
  );
      
  
};

export default App;
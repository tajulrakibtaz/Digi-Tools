// tailwind 
// daisy ui
import Navbar from './navbar/navbar';
import React from 'react';
import Header from './header/header';
import Ratings from './ratings/ratings';
import Details from './details/details';
import Steps from './steps/steps';
import Pricing from './pricing/pricing';
import Ready from './ready/ready';
const App = () => {
  return (
    <div className=''>
    <Navbar></Navbar>
    <Header></Header>
    <Ratings></Ratings>
    <Details></Details>
<Steps ></Steps>
<Pricing></Pricing>
<Ready></Ready>
    </div>
  );
};

export default App;
import React from 'react';
import Hero from './Hero';
import Brokerage from './Brokerage';
import OpenAccount from '../OpenAccount';


function PricingPageWrapper() {
    return (  
        <>
        <Hero/>
        <OpenAccount/>
        <Brokerage/>
        </>
    );
}

export default PricingPageWrapper;
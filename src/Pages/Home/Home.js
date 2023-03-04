import React from 'react';
import HeroSection from '../HeroSection/HeroSection';
import Partner from '../Partner/Partner';
import Header from '../Shared/Header';
import SpecialServices from '../SpecialServices/SpecialServices';

const Home = () => {
    return (
        <div>
            <Header />
            <HeroSection />
            <Partner />
            <SpecialServices />
        </div>
    );
};

export default Home;
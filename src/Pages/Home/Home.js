import React from 'react';
import HeroSection from '../HeroSection/HeroSection';
import Partner from '../Partner/Partner';
import Header from '../Shared/Header';

const Home = () => {
    return (
        <div>
            <Header />
            <HeroSection />
            <Partner />
        </div>
    );
};

export default Home;